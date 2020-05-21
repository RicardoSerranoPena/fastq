const User=require('../models/user')

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
exports.register=(req,res)=>{
  
var hash = bcrypt.hashSync(req.body.password, salt);
User.findOne({ email: req.body.username }).then((user) => {
	if (user) {
		return res.send({
			error:"There was an error",
			message:"A user with that email address or username already exists"
			})
	} else {
		const user = new User({
			email: req.body.email,
            fullName:req.body.fullName,
            password:hash,

		});
		user.save().then((result) => { 
         res.redirect('/')
		}).catch((err) => {
			res.redirect('/login');
			
		});
	}

})
}

exports.login=(req,res)=>{
    User.findOne({ username: req.body.email }, async function(err, user){
        if (user) {
                    const match = await bcrypt.compareSync(req.body.password, user.password);
                    if(match){
                      return res.send({
                                user:user,
                                message:"Login Successful"
                                        }
                                    )
                    }
                    res.send({
                        response:"FALSE",
                        message:"Incorrect UserName or Password,Please Try again."
                    })

        } else {
            res.send({
                response:"FALSE",
                        message:"No user is registered under that email"
            })
        }
    });
    

(req, res, next); 

}


