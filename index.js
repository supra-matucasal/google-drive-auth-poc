import { oauth2Client, url } from './GoogleDriveService.js';
import { createFolder, uploadFile } from './GoogleDriveAPI.js';
import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/connect-to-google', (req, res) => {
    res.redirect(url);
});


app.get('/authorize', async (req, res) => {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    console.log('code', code);
    console.log('tokens', tokens);

    res.redirect('/connected');
});

app.get('/connected', (req, res) => {
    res.send('Connected!');
});

app.get('/upload-files', async (req, res) => {
    const folderId = await createFolder('Test Folder');
    console.log('folderId', folderId)
    const file = await uploadFile('test.txt', './file_to_upload.txt', folderId);
    console.log('Files uploaded!', file)
    res.send('Files uploaded!');
});

app.listen(3000, () => console.log('Server started'));


// async function main() {
//     // Initialize Google Drive API
//     console.log('Initializing Google Drive API');
//     console.log('oauth2Client', oauth2Client);
//     console.log('url', url);
// }

// main();
