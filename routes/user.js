import  express  from "express";
import { deleteUser, findUserById, getAllUsers, register, specialFunc, updateUser } from "../controllers/user.js";

const router = express.Router();


router.get("/all", getAllUsers);

router.post("/new", register);

router.get("/userid/special", specialFunc);

router
    .route("/userid/:id")
    .get(findUserById)
    .put(updateUser)
    .delete(deleteUser);

// router.get("/userid/:id", findUserById);
// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);


export default router;