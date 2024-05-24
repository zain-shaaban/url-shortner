const Url=require("../models/urls");

const MainPage=async(req,res)=>{
    try {
        const allUrls=await Url.find();
        res.render("index",{
            urls:allUrls
        })
    } catch (error) {
        console.log(error)
    }
}

const AddNewShortner=async(req,res)=>{
    try {
        await Url.create({long:req.body.FullUrl});
        res.redirect("/")
    } catch (error) {
        console.log(error)
    }
}

const tranformating=async(req,res)=>{
    try {
        const found=await Url.findOne({short:req.params.id});
        if(!found) return res.status(404).json({message:"This Short Is Not Exist"});
        found.clicks++;
        found.save();
        res.redirect(found.long);
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    tranformating,
    AddNewShortner,
    MainPage
}