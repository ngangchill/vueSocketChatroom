const express = require('express');
// const crypto = require('crypto');

const router = express.Router();

/* GET home page. */
router.get('/login', (req, res) => {
  let username = req.query.username || req.params.username;
  let ip = req.connection.remoteAddress;
  let port = req.connection.remotePort;
  let sessionId = req.session.id;

  if (username) {
    req.session.username = username;
    res.cookie('ioUser',
      {
        username,
        ip,
        port,
        sessionId,
      },
      {
        signed: true,
        secure: false,
        expires: new Date(Date.now() + (1000 * 60 * 60 * 24)), // cookie保存一天时间
        httpOnly: true,
      });

    res.json({
      msg: 'success',
      code: '200',
    });
  } else {
    res.json({
      msg: 'username is required',
      code: '201',
    });
  }
});

router.get('/testLogin', (req, res) => {
  if (req.session.username) {
    res.json({
      msg: 'logged in',
      code: '200',
    });
  } else {
    res.json({
      msg: 'not log in',
      code: '203',
    });
  }
});

module.exports = router;
