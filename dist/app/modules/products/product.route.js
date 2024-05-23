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
exports.productsRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const product_model_1 = __importDefault(require("./product.model"));
const router = express_1.default.Router();
router.post("/", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield product_model_1.default.create(productData);
    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  }),
);
// router.get("/", productControllers.getAllProducts);
router.get("/", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const products = yield product_model_1.default.find();
      res.json({
        success: true,
        message: "Products fetched successfully!",
        data: products,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }),
);
// router.get("/:productId", productControllers.getAProduct);
router.get("/:id", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const product = yield product_model_1.default.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
      res.json({
        success: true,
        message: "Product fetched successfully!",
        data: product,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }),
);
// router.put("/:productId", productControllers.putAProduct);
router.put("/:id", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const updateData = req.body;
      const product = yield product_model_1.default.findById(req.params.id);
      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }
      // Update product data
      Object.assign(product, updateData);
      // Decrease inventory quantity by 1
      if (product.inventory.quantity > 0) {
        product.inventory.quantity -= 1;
      } else {
        return res.status(400).json({
          success: false,
          message: "Insufficient inventory quantity",
        });
      }
      const updatedProduct = yield product.save();
      res.json({
        success: true,
        message: "Product updated successfully!",
        data: updatedProduct,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }),
);
// filter by iPhione
// /search/ipnone
router.get("/search/ipnone", (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const products = yield product_model_1.default.find({
        name: { $regex: "iphone", $options: "i" },
      });
      res.json({
        success: true,
        message: "Filtered products fetched successfully!",
        data: products,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }),
);
router.delete(
  "/:productId",
  product_controller_1.productControllers.deleteAProduct,
);
exports.productsRoute = router;
