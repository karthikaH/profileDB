import { Router } from "express";
import { getArts, getOneArt, updateOneArt } from "./art.controllers";

const router = Router();

// /api/art
router.route("/").get(getArts());

// /api/art/:id
router
  .route("/:id")
  .get(getOneArt())
  .put(updateOneArt());

export default router;
