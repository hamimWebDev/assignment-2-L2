"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
const product_service_1 = require("./product.service");
const postProductsFromDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_service_1.productsService.postProductsFromDb(productData);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: err.message,
        });
    }
});
const getAllProductsFromDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.productsService.getAllProductsFromDb();
        res.json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: err.message,
        });
    }
});
const getProductsByIdFromDb = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.productId;
        const result = yield product_service_1.productsService.getProductsByIdFromDb(_id);
        res.json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: err.message,
        });
    }
});
exports.productsController = {
    postProductsFromDb,
    getAllProductsFromDb,
    getProductsByIdFromDb,
};
