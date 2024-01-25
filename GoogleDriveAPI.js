import { google } from 'googleapis';
import { oauth2Client } from './GoogleDriveService.js';
import fs from 'fs';

const drive = google.drive({ version: 'v3', auth: oauth2Client });

export async function createFolder(folderName) {
  const fileMetadata = {
    'name': folderName,
    'mimeType': 'application/vnd.google-apps.folder'
  };
  const folder = await drive.files.create({
    resource: fileMetadata,
    fields: 'id'
  });
  return folder.data.id;
}

export async function uploadFile(fileName, filePath, folderId) {
  const fileMetadata = {
    'name': fileName,
    'parents': [folderId]
  };
  const media = {
    body: fs.createReadStream(filePath)
  };
  const file = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id'
  });
  return file.data.id;
}
