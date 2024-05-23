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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const productData = req.body;
      const result =
        yield product_service_1.productServices.createProduct(productData);
      res.json({
        success: true,
        message: "Product created successfully!",
        data: result,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message || "Something is wrong",
        error: err,
      });
    }
  });
const getAllProducts = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const result = yield product_service_1.productServices.getAllProducts();
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message || "Something is wrong",
        error: err,
      });
    }
  });
const getAProduct = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { productId } = req.params;
      const result =
        yield product_service_1.productServices.getAProduct(productId);
      res.status(200).json({
        success: true,
        message: "Product fetched successfully!",
        data: result,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message || "Something is wrong",
        error: err,
      });
    }
  });
const putAProduct = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { productId } = req.params;
      const updatesProduct = req.body.product;
      const result = yield product_service_1.productServices.putAProduct(
        productId,
        updatesProduct,
      );
      res.status(200).json({
        success: true,
        message: "Products updated successfully!",
        data: result,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: err,
      });
    }
  });
const deleteAProduct = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { productId } = req.params;
      const result =
        yield product_service_1.productServices.deleteAProduct(productId);
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: result,
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message || "Something is wrong",
        error: err,
      });
    }
  });
exports.productControllers = {
  createProduct,
  getAllProducts,
  getAProduct,
  putAProduct,
  deleteAProduct,
};
