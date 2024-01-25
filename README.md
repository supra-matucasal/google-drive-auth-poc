# Create Google Dev Account & Project

https://developers.google.com/drive/api/quickstart/go?hl=es-419

1- Create project in https://console.cloud.google.com/
2- Enable API
3- Add credentials https://console.cloud.google.com/apis/credentials/consent?hl=es-419
4- Set permissions 
5- Create credentials https://console.cloud.google.com/apis/credentials?hl=es-419&authuser=3
6- Create API Key Oauth2

IMPORTANT
- Set external for the credentials
- If you are in testing mode, set the users


# To run the project

1- Create a .env file with the following variables

```
CLIENT_ID=
CLIENT_SECRET=
REDIRECT_URL=
```

2- Run the project

```
node index.js
```

3- Open the browser and go to the following url

```
http://localhost:3000/connect-to-google
```

4- Accept the permissions

5- Upload the files goint to the following url

```
http://localhost:3000/upload-files
```


6- Check the files in your google drive



