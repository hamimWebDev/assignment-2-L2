"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
// post route
router.post("/", product_controller_1.productsController.postProductsFromDb);
// get All route
router.get("/", product_controller_1.productsController.getAllProductsFromDb);
// get A product by id
router.get("/:productId", product_controller_1.productsController.getProductsByIdFromDb);
exports.productsRoute = router;
