const sendEmailControler = (req, res) =>{
    try {
        return res.status(200).send({
            success: true,
            message:"Your message send Successfully",
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: flase,
            message:"Send Email API Error",
            error
        })
    }
};

module.exports = {sendEmailControler};