const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// Class User extends Model and adds a method to check the password
class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// User Model Definition 

User.init(
    {

// User ID is required and is an auto-incrementing integer
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
// Username is required and must be at least 3 characters long
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
// Email is required and must be a valid email before creation
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
// Password is required and must be at least 8 characters long
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {

// hooks are automatic methods that run during various phases of the User Model lifecycle 

        hooks: {

// beforeCreate and beforeUpdate are used to hash the password before it is created or updated in the database

            beforeCreate: async (newUserData) => {  
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

// beforeUpdate is used to hash the password before it is updated in the database 

            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },

// sequelize connection is passed in as a parameter to the init method 

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

// Export the User model 

module.exports = User;
