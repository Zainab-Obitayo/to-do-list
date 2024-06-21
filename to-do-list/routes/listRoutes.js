const express = require('express');

const {
    createList,
    getLists,
    getList,
    updateList,
    deleteList
} = require('../controllers/listController');
const router = express.Router();

router.post("/", createList)
router.get("/", getLists)
router.get("/:id", getList)
router.patch("/:id", updateList)
router.delete("/:id", deleteList)

module.exports = router;