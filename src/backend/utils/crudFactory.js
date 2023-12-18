
const getAllObjects_Factory_Handler = (objectModel) => 
    async function getAll_MongoDB_Handler (req,res){
        console.log("Get all users");
        try{
            const data = await objectModel.find();
            
            if(data.length === 0){
                throw new Error("No data found");
            }
            else{
                res.status(200).json({
                    status : 'success',
                    data:data
                });
            }
        }
        catch(err)
        {
            console.log('Error in getting all objects : ', err);
            res.status(500).json({
                status:'failure',
                message:err.message
            })
        }
};

const createObject_Factory_Handler = (objectModel) =>
    async function createObject_MongoDB_Handler (req,res) {
        //create a new entry in the database
        console.log("create a new entry in the database");
        try{
           
            const addEntity = req.body;
            const entityAdded = await objectModel.create(addEntity)

            res.status(201).json({
                status:"sucess",
                data:entityAdded
            })
        }
        catch(err){
            res.status(500).json({
                status:"error",
                message:err.message
            })
        }
    };

module.exports = {
    getAllObjects_Factory_Handler,
    createObject_Factory_Handler
}