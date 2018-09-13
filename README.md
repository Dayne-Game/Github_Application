# Github Application
This application uses the Github API to search and view any Github users PUBLIC repositories.


## Start the Application
To start the application you can either use NPM or yarn.

NPM
```
npm start // This Starts the Application using npm 
```
YARN

```
yarn start // Starts application using yarn
```

## Github URL
The URL that was used for testing this had my personal Github Token key. This gave me access of 5000 times ever hour. To gain the same access you will need to input your own token key at the end of the URL.

Example
```
https://api.github.com/users/${name}/repos?per_page=100&token=123456789 
```

The default limit without a token key is 60 times per hour.
