import { google as googleApi } from 'googleapis';
import 'dotenv/config';

console.log(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
)

console.log('Initializing Google Drive API')


const oauth2Client = new googleApi.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URL
);

// Scopes for Google Drive API
const SCOPES = ['https://www.googleapis.com/auth/drive'];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
});



export { oauth2Client, url };