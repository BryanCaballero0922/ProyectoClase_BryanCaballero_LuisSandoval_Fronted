import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Factura() {
  const location = useLocation();
  const navigate = useNavigate();

  // Productos recibidos por estado, o vacio si no hay
  const initialProductos = location.state?.productos || [];

  // Estado para lista de productos (carrito)
  const [productos, setProductos] = useState(initialProductos);

  // Estado para edición: índice del producto que quieres editar cantidad
  const [editIndex, setEditIndex] = useState(null);

  // Estado para formulario de cantidad a editar
  const [cantidadEdit, setCantidadEdit] = useState("");

  // Actualizar cantidad en el formulario cuando cambias producto a editar
  useEffect(() => {
    if (editIndex !== null) {
      setCantidadEdit(productos[editIndex].cantidad?.toString() || "1");
    } else {
      setCantidadEdit("");
    }
  }, [editIndex, productos]);

  // Manejar cambio en cantidad del formulario
  const handleCantidadChange = (e) => {
    setCantidadEdit(e.target.value);
  };

  // Guardar la cantidad editada en el producto
  const handleGuardarCantidad = (e) => {
    e.preventDefault();
    if (!cantidadEdit || isNaN(cantidadEdit) || Number(cantidadEdit) < 1) {
      alert("Ingrese una cantidad válida mayor a 0");
      return;
    }
    const nuevosProductos = [...productos];
    nuevosProductos[editIndex].cantidad = Number(cantidadEdit);
    setProductos(nuevosProductos);
    setEditIndex(null);
  };

  // Eliminar producto
  const handleEliminar = (index) => {
    const nuevosProductos = productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);
    if (editIndex === index) setEditIndex(null);
  };

  // "Facturar" producto (simula quitar y alerta)
  const handleFacturar = (index) => {
    alert(`Producto "${productos[index].name}" facturado`);
    const nuevosProductos = productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);
    if (editIndex === index) setEditIndex(null);
  };

  // Calcular total
  const total = productos.reduce((acc, item) => {
    const priceNum = Number(item.price.replace("$", ""));
    return acc + priceNum * (item.cantidad || 1);
  }, 0);

  return (
    <div className="container mt-4">
      <h2>Factura</h2>

      {productos.length === 0 ? (
        <p>No hay productos en la factura</p>
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Marca</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Subtotal</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((item, index) => {
                const priceNum = Number(item.price.replace("$", ""));
                const subtotal = priceNum * (item.cantidad || 1);
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.brand}</td>
                    <td>{item.cantidad || 1}</td>
                    <td>${priceNum.toFixed(2)}</td>
                    <td>${subtotal.toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning me-2"
                        onClick={() => setEditIndex(index)}
                      >
                        Editar
                      </button>
                      <button
                        className="btn btn-sm btn-danger me-2"
                        onClick={() => handleEliminar(index)}
                      >
                        Eliminar
                      </button>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleFacturar(index)}
                      >
                        Facturar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Formulario para editar cantidad */}
          {editIndex !== null && (
            <form onSubmit={handleGuardarCantidad} className="mb-4">
              <label>
                Editar cantidad de{" "}
                <strong>{productos[editIndex].name}</strong>:
              </label>
              <input
                type="number"
                min="1"
                value={cantidadEdit}
                onChange={handleCantidadChange}
                className="form-control mb-2"
              />
              <button className="btn btn-success me-2" type="submit">
                Guardar
              </button>
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => setEditIndex(null)}
              >
                Cancelar
              </button>
            </form>
          )}

          <h4>Total: ${total.toFixed(2)}</h4>
        </>
      )}

      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
}

export default Factura;


