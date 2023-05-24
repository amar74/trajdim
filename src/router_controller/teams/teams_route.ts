import express from "express";
import authenticateToken from "../../middleware/auth";
import { teamsPost } from "./controller/teams_controller";
import { teamEdit } from "./controller/teams_edit_controller";
import { teamsDelete } from "./controller/teams_delete_controller";
import { teamsGet } from "./controller/teams_controller_get";
import { teamsGetSingle } from "./controller/teams_controller_single";
const team = express.Router();
team.post("/team", authenticateToken, teamsPost);
team.patch("/team", authenticateToken, teamEdit);
team.delete("/team", authenticateToken, teamsDelete);
team.get("/team",authenticateToken,teamsGet)
team.get("/team/:id",authenticateToken,teamsGetSingle)
export default team;

