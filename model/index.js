const User = require('./User');
const Project = require('./Project');
// User has many Projects 
User.hasMany(Project, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Project belongs to User
Project.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Project };