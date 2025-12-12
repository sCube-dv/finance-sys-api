import User from "../models/UsersModel.js";
import bcrypt from "bcrypt";

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
                message: "User " +newUser.name+ " created successfully",
            });
        } catch (error) {
            res.status(500).send({
                message: "Error creating user",
                error: error.message
            });
        }  
    } //end create method

    showAllUsers = async (req, res) => {
        try {
            let users = await User.findAll({ attributes: { exclude: ['password'] } });
            res.status(200).send(users);
        } catch (error) {
            res.status(500).send({
                message: "Error fetching users",
                error: error.message
            });
        }
    } //end showAllUsers method

    showUserById = async (req, res) => {
        let userId = req.params.id;
        try {
            let user = await User.findByPk(userId, { attributes: { exclude: ['password'] } });
            if (user) {
                res.status(200).send(user);
            } else {
                res.status(404).send({
                    message: "User not found"
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Error fetching user",
                error: error.message
            });
        }
    } //end showUserById method

    update = async (req, res) => {
        // update user method
    
    }

    delete = async (req, res) => {
        // To be implemented
    }   //end delete method 

    

}

export default new UserController();

