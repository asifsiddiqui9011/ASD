const express = require("express");
const playerController = require("../Controller/PlayerController");
const router = express.Router();


router.post("/player", playerController.createPlayer);
router.get("/player", playerController.getAllPlayers);
router.get("/player/:id", playerController.getPlayerById);
// router.put("/player/:id", playerController.updatePalyer);
router.delete("/users/:id", playerController.deletePlayer);

module.exports = router;