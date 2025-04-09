const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductControl");
const auth = require("../middleware/auth");

router.post("/", auth, productController.createProduct);
router.get("/", productController.getAllProducts);
router.put("/:id", auth, productController.updateProduct);
router.delete("/:id", auth, productController.deleteProduct);

module.exports = router;
