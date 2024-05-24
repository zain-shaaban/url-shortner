const express=require("express");
const {AddNewShortner,MainPage,tranformating}=require("../controllers/urls.controllers")

const router=express.Router();

router.route("/").get(MainPage)
router.route("/createShortner").post(AddNewShortner);
router.route("/:id").get(tranformating)

module.exports=router;