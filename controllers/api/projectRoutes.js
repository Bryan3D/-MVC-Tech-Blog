const router = require('express').Router();
const {Project} = require('../../models');
const withAuth = require('../../utils/auth');



// get all projects for a user 
router.post('/', withAuth, async (res, req) => {
  
    try{
        const newProject = await Project.create({
            ...req.body,
            user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
} catch (err){
    res.status(400).json(err);
}

});


// delete a project

router.delete('/:id', withAuth, async(req, res) => {
    try {
        const projectData = await Project.destroy({
            where:{
                id: req.params.id,
            }
        });

        if(!projectData){
            res.status(404).json({massage: 'No project found with this id!'})
            return;
        }

        res.status(200).json(projectData);
    } catch(err) {
        res.status(500).json(err);
    }
    
});


module.exports = router;