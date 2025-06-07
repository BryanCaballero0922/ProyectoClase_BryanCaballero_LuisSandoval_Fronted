import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Factura() {
  const location = useLocation();
  const productoRecibido = location.state?.producto || null;

  const [editIndex, setEditIndex] = useState(null);
  const [contactos, setFacturacion] = useState([]);

  // Formulario con campos del cliente y producto
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    rtn: '',
    direccion: '',
    nombrepieza: productoRecibido ? productoRecibido.name : '',
    price: productoRecibido ? productoRecibido.price : '',
    description: productoRecibido ? productoRecibido.description : ''
  });

  // Si cambia el producto (ej: si se vuelve a cargar con otro producto), actualizamos el formulario
  useEffect(() => {
    if (productoRecibido) {
      setForm(formAnt => ({
        ...formAnt,
        nombrepieza: productoRecibido.name,
        price: productoRecibido.price,
        description: productoRecibido.description
      }));
    }
  }, [productoRecibido]);

  const handleOnChangeInputs = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnEdit = (index) => {
    setForm(contactos[index]);
    setEditIndex(index);
  };

  const handleOnDelete = (index) => {
    const updatedContactos = contactos.filter((_, i) => i !== index);
    setFacturacion(updatedContactos);
    // Si estamos editando el contacto que borramos, limpiar formulario
    if (editIndex === index) {
      setForm({
        nombre: '',
        telefono: '',
        rtn: '',
        direccion: '',
        nombrepieza: productoRecibido ? productoRecibido.name : '',
        price: productoRecibido ? productoRecibido.price : '',
        description: productoRecibido ? productoRecibido.description : ''
      });
      setEditIndex(null);
    }
  };

  const handleOnFact = (index) => {
    alert("Factura aprobada para " + contactos[index].nombre);
    // Opcional: eliminar de la lista o marcar como facturado
    const updatedContactos = contactos.filter((_, i) => i !== index);
    setFacturacion(updatedContactos);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.direccion) {
      alert("Por favor, complete los campos obligatorios.");
      return;
    }

    if (editIndex !== null) {
      const updatedContactos = [...contactos];
      updatedContactos[editIndex] = form;
      setFacturacion(updatedContactos);
      setEditIndex(null);
    } else {
      setFacturacion([...contactos, form]);
    }

    setForm({
      nombre: '',
      telefono: '',
      rtn: '',
      direccion: '',
      nombrepieza: productoRecibido ? productoRecibido.name : '',
      price: productoRecibido ? productoRecibido.price : '',
      description: productoRecibido ? productoRecibido.description : ''
    });
  };

  return (
    <div className="container mt-4">
      <h2>Gestión de Facturación</h2>

      {productoRecibido && (
        <div className="alert alert-info">
          <strong>Producto seleccionado:</strong><br />
          Nombre: {productoRecibido.name} <br />
          Precio: {productoRecibido.price} <br />
          Descripción: {productoRecibido.description}
        </div>
      )}

      <form onSubmit={handleOnSubmit} className="mb-4">
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleOnChangeInputs}
          placeholder="Nombre"
          className="form-control mb-2"
          required
        />
        <input
          name="telefono"
          value={form.telefono}
          onChange={handleOnChangeInputs}
          placeholder="Número telefónico"
          className="form-control mb-2"
          required
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
          required
        />
        <input
          name="nombrepieza"
          value={form.nombrepieza}
          onChange={handleOnChangeInputs}
          placeholder="Nombre de la pieza"
          className="form-control mb-2"
          readOnly
        />
        <input
          name="price"
          value={form.price}
          placeholder="Precio"
          className="form-control mb-2"
          readOnly
        />
        <textarea
          name="description"
          value={form.description}
          placeholder="Descripción"
          className="form-control mb-2"
          rows={2}
          readOnly
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
            <th>Nombre de la pieza</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) => (
            <tr key={index}>
              <td>{contacto.nombre}</td>
              <td>{contacto.telefono}</td>
              <td>{contacto.rtn}</td>
              <td>{contacto.direccion}</td>
              <td>{contacto.nombrepieza}</td>
              <td>{contacto.price}</td>
              <td>{contacto.description}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleOnEdit(index)}>Editar</button>
                <button className="btn btn-danger btn-sm me-2" onClick={() => handleOnDelete(index)}>Eliminar</button>
                <button className="btn btn-primary btn-sm" onClick={() => handleOnFact(index)}>Facturar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Factura;