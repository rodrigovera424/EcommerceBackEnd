const router = require ("express").Router();
const User = require ("../models/User");
const CryptoJS = require ("crypto-js");
//creacion de nuevos usuarios
router.post ("/register" ,async  (req,res) =>{
  const newUser =new User({
    username: req.body.username,
    email: req.body.email,
    //cryptoJS para encriptar contraseñas
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    


  });

  try{ 
  
  const savedUser = await newUser.save();
//informa el error
res.status(201).json(savedUser)
 }catch (err){ 
 res.status(500).json(err);
    
 }
});

//logueo

router.post("login", async (req,res)=>{
  try{

    const user = await User.findOne({username:req.body.username});
    //en caso de error va al json
     !user.password && res.status (401) .json("credenciales incorrectas!")

    const hashedPassword =  CryptoJS.AES.decrypt(
      user.password.process.env.PASS_SEC);
      const Originalpassword= hashedPassword.toString(CryptoJS.enc.Utf8)

   Originalpassword !== req.body.password &&
   res.status(401).json("datos incorrectos!");

   const {password, ...others } = user._doc;

    res.status(200).json(others);

   }catch (err) {
    res.status(500).json(err)
  }

})





module.exports = router;