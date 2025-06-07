import { useState } from "react";

function Factura() {
  const [editIndex, setEditIndex] = useState(null);
  const [facturacion, setFacturacion] = useState([]);
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    rtn: '',
    direccion: '',
    nombrepieza: ''
  });

  const handleOnChangeInputs = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnEdit = (index) => {
    setForm(facturacion[index]);
    setEditIndex(index);
  };

  const handleOnDelete = (index) => {
    const updatedFacturacion = facturacion.filter((_, i) => i !== index);
    setFacturacion(updatedFacturacion);
  };

    const handleOnFact = (index) => {
       alert("Factura aprobada");
    const updatedFacturacion = facturacion.filter((_, i) => i !== index);
    setFacturacion(updatedFacturacion);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedFacturacion = [...facturacion];
      updatedFacturacion[editIndex] = form;
      setFacturacion(updatedFacturacion);
      setEditIndex(null);
    } else {
      setFacturacion([...facturacion, form]);
    }
    setForm({ nombre: '', telefono: '', rtn: '', direccion: '',  nombrepieza: '' });
  };

  return (
    <div className="container mt-4">
      <h2>Gestión de Facturación</h2>
      <form onSubmit={handleOnSubmit} className="mb-4">
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleOnChangeInputs}
          placeholder="Nombre"
          className="form-control mb-2"
        />
        <input
          name="telefono"
          value={form.telefono}
          onChange={handleOnChangeInputs}
          placeholder="Número telefónico"
          className="form-control mb-2"
        />
        <input
          name="rtn"
          value={form.rtn}
          onChange={handleOnChangeInputs}
          placeholder="RTN"
          className="form-control mb-2"
        />
        <input
          name="direccion"
          value={form.direccion}
          onChange={handleOnChangeInputs}
          placeholder="Dirección"
          className="form-control mb-2"
        />
        <input
          name="nombrepieza"
          value={form.nombrepieza}
          onChange={handleOnChangeInputs}
          placeholder="Informacion de la pieza"
          className="form-control mb-2"
        />

        <button className="btn btn-success">
          {editIndex !== null ? 'Actualizar Contacto' : 'Agregar Contacto'}
        </button>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>RTN</th>
            <th>Dirección</th>
            <th>Informacion de la pieza</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {facturacion.map((facturacion, index) => (
            <tr key={index}>
              <td>{facturacion.nombre}</td>
              <td>{facturacion.telefono}</td>
              <td>{facturacion.rtn}</td>
              <td>{facturacion.direccion}</td>
              <td>{facturacion.nombrepieza}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleOnEdit(index)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleOnDelete(index)}>Eliminar</button>
                <button className="btn btn-primary btn-sm me-2" onClick={() => handleOnFact(index)}>Facturar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Factura;
