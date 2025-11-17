import User from "../models/Users";
import bcrypt from "bcryptjs";

class UserController {
    /* constructor if needed */
    constructor() {}
    
    /* methods */
    create = async (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        let name = req.body.name;
        let email = req.body.email;

        /* password hashing */
        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);

        let userObj = {
            username : username,
            password : hashedPassword,
            name : name,
            email : email
        };

        try {
            let newUser = await User.create(userObj);
            res.status(201).send({
                message: "User created successfully",
                user: newUser
            });
        } catch (error) {
            res.status(500).send({
                message: "Error creating user",
                error: error.message
            });
        }  
    } //end create method

    

}

export default new UserController();

