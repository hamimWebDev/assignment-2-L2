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
exports.productServices = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const createProduct = (payLoad) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(payLoad);
    return result;
  });
const getAllProducts = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find();
    return result;
  });
const getAProduct = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(id);
    return result;
  });
const putAProduct = (_id, updates) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findOneAndUpdate(
      { _id },
      updates,
      {
        new: true,
        runValidators: true,
      },
    );
    return result;
  });
const deleteAProduct = (id) =>
  __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield product_model_1.default.updateOne(
      { _id: id },
      { isDeleted: true },
    );
    console.log(result);
    return result;
  });
exports.productServices = {
  createProduct,
  getAllProducts,
  getAProduct,
  putAProduct,
  deleteAProduct,
};
