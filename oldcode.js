//maybe not use no more


  app.get('/fobj', function(req, res) {

    var queryData = url.parse(req.url, true).query;
    const testFolder = './html/uploads/' + queryData.i;
    const fs = require('fs');
    var slot = ""
    var pattern = new RegExp('^[0-9]{6}-[0-9]{2}$');

    fs.readdir(testFolder, (err, files) => {
      files.forEach(file => {
        slot = slot + testFolder + '/' + file + "#"
      });
      //res.json({"ok":"ok"})
      res.render('objviewer', {
        slot: slot,
        info: {
          title: "title",
          sharecount: 0,
          goodcount: 0,
          link: "http://192.168.1.103:8000/obj?i=0118"
        }
      });
    });

  });


