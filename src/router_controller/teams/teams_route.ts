import express from "express";
import authenticateToken from "../../middleware/auth";
import { teamsPost } from "./controller/teams_controller";
import { teamEdit } from "./controller/teams_edit_controller";
import { teamsDelete } from "./controller/teams_delete_controller";
const team = express.Router();
team.post("/team", authenticateToken, teamsPost);
team.patch('/team',authenticateToken,teamEdit);
team.delete('/team',authenticateToken,teamsDelete)
export default team;