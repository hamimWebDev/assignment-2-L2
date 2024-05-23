"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesRoute = void 0;
const express_1 = __importDefault(require("express"));
const movie_controller_1 = require("./movie.controller");
const router = express_1.default.Router();
router.post("/", movie_controller_1.movieControllers.createMovie);
router.get("/", movie_controller_1.movieControllers.getAllMovies);
router.get("/:movieId", movie_controller_1.movieControllers.getAMovie);
router.get("/:slug", movie_controller_1.movieControllers.getMovieBySlug);
exports.moviesRoute = router;
