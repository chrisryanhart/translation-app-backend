const express = require('express');

const router = new express.Router();

router.get('/', async function(req,res,next){
  try{

      return res.send('complete');
  }catch(err){
      return next(err);
  }
});

module.exports = router;