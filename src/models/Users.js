import db from "../config/db";

const User = db.sequelize.define(
    'users_tb',
    {
        id: {
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: db.Sequelize.STRING(50),
            allowNull: false,
            unique: true,
        },
        password: {
            type: db.Sequelize.STRING(100),
            allowNull: false,
        },
        name: {
            type: db.Sequelize.STRING(100),
            allowNull: false,
        },
        email: {
            type: db.Sequelize.STRING(100),
            allowNull: false,
            unique: true,
        }
    }
);

export default User;
