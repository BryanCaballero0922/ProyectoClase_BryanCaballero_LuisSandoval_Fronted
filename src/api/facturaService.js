const express = require('express');
const { getAllFacturas, createFactura, updateFactura, deleteFactura } = require('../controllers/facturaControllers');
const router = express.Router();

router.get('/', getAllFacturas);           // GET /factura
router.post('/', createFactura);           // POST /factura
router.put('/:rtn', updateFactura);         // PUT /factura/:id
router.delete('/:rtn', deleteFactura);      // DELETE /factura/:id

module.exports = router