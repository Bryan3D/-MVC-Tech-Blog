const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// create our Project model 
class Project extends Model {}

// create fields/columns for Project model

Project.init(
    {
        // define an id column
        id: {
            // use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            // this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
        },
        // define a title column
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // define a description column
        description: {
            type: DataTypes.STRING,
        },
        // define a date created column
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        // define a status column
        needed_funding:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        // user id column
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))sequelize
        // pass in our imported sequelize connection (the direct connection to our database)
        sequelize,
        // don't automatically create createdAt/updatedAt timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
        underscored: true,
        // make it so our model name stays lowercase in the database
        modelName: 'project',
    }
);

module.exports = Project;