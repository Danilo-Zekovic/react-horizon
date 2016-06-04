# react-horizon
Trying to make React and Horizon work together the way we would use React and ES2015 if we did not had horizon. Wish me luck!

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

Then go to localhost:8181    

Also now this comands work too:     

To build the bundle.js:     
```npm run build```     
To rebuild automatically every time some change is saved:    
```npm run watch```    
To run the server:    
```npm start```      

Still working on the server-dev:    

###WARNING    

If you run into the 400 error (Bad request), it is possibly caused by horizon.io
 or something other related to server. All you have to do is to fix it is delete
 cookies for the localhost or your server ip/url. 
