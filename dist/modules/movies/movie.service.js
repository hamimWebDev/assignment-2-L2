"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
const movie_model_1 = __importDefault(require("../movie.model"));
const createMovie = (payLoad) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.default.create(payLoad);
    return result;
  });
const getAllMovies = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.default.find();
    return result;
  });
const getAMovie = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.default.findById(id);
    return result;
  });
const getMovieBySlug = (slug) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield movie_model_1.default.findOne({ slug: slug });
    return result;
  });
exports.MovieService = {
  createMovie,
  getAllMovies,
  getAMovie,
  getMovieBySlug,
};
