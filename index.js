const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('ok desde el archivo ruta')
})

router.get('/home',(req,res)=>{
    res.send('ok desde el archivo ruta')
})


module.exports = router;