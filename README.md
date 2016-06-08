# react-horizon
Trying to make React and Horizon work together the way we would use React and ES2015 if we did not have horizon. Wish me luck!

## Dependencies
1. horizon.io
2. node.js
3. RethinkDB
4. Webpack (installed globally

## Instructions

```bash
git clone https://github.com/Danilo-Zekovic/react-horizon.git
cd react-horizon
cd rh
npm install
webpack
hz serve --dev
```

Then go to localhost:8181 or 127.0.0.1:8181     

Also, this comands work now, too:     

To build the bundle.js:     
```npm run build```     
To rebuild automatically every time some change is saved (run it in the separate console):    
```npm run watch```    
To run the server:    
```npm start```      

Still working on the server-dev (COMING SOON, hopefully):    

###WARNING    

If you run into the 400 error (Bad request), it is possibly caused by horizon.io
 or something other related to server. All you have to do is to fix it is delete
 cookies for the localhost or your server ip/url. If having any other errors or miss functioning of the app before 
 panicking try the same steps of removing cookies and/or local storage. 
