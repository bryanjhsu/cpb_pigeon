/*========================================
=            Required Modules            =
========================================*/
var express     =   require('express'),
    compression =   require('compression'),
    app         =   express(),
    serveStatic =   require('serve-static'),
    auth        =   require('http-auth'),
    port        =   process.env.PORT || 8000

console.log('*********************************************',
      '\n***           Pigeon Pretotype           ***',
      '\n*********************************************')



/*====================================================
=             Static Application Config              =
====================================================*/
function setHeaders(res, path) {
  // No-Index, No-Follow if set in enviro config
  if(process.env.NO_INDEX_NO_FOLLOW) {
    res.setHeader('X-Robots-Tag', 'noindex, nofollow')
  }
}


// Authentication module.
const basic = auth.basic({
      realm: "Pigeon Pretotype"
    }, (username, password, callback) => {
      callback(username === process.env.ADMIN_USR && password === process.env.ADMIN_PWD)
    })


// App setup
app.use(auth.connect(basic))

app.use(compression())

app.use(serveStatic('build', {
  'index': ['index.html', 'index.htm'],
  'setHeaders': setHeaders
}))


// Catch-All i.e. 404 Route
app.get('/*', function(req, res){
  res.redirect('/')
})

app.listen(port, function () {
  console.log('Running on Port : ', port)
})
