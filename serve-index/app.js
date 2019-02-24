var express    = require('express')
var serveIndex = require('serve-index')
 
var app = express()
 
// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use('/ftp', express.static('public'), serveIndex('public', {'icons': true})); //serving an index of the given directory 'public'.
  


// Listen
app.listen(3000)





// Error: ENOTDIR: not a directory, stat '/home/ujjwal/Desktop/THS/Week6/serve-index/public/movieexplorer.html/'
//app.use('/ftp', express.static('public/movieexplorer.html'), serveIndex('public/movieexplorer.html', {'icons': true}));

// Error: Serving the index of the directory but cannot access individual elements/ files.
// app.use('/ftp', express.static('public/movieexplorer.html'), serveIndex('public', {'icons': true}));  
