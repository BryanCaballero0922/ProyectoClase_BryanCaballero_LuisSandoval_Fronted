import { useState } from "react";

function Contactos() {
  const [editIndex, setEditIndex] = useState(null);
  const [contactos, setContactos] = useState([]);
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
    setForm(contactos[index]);
    setEditIndex(index);
  };

  const handleOnDelete = (index) => {
    const updatedContactos = contactos.filter((_, i) => i !== index);
    setContactos(updatedContactos);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedContactos = [...contactos];
      updatedContactos[editIndex] = form;
      setContactos(updatedContactos);
      setEditIndex(null);
    } else {
      setContactos([...contactos, form]);
    }
    setForm({ nombre: '', telefono: '', rtn: '', direccion: '', nombrepieza: '' });
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
          value={form.taller}
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
          {contactos.map((contacto, index) => (
            <tr key={index}>
              <td>{contacto.nombre}</td>
              <td>{contacto.telefono}</td>
              <td>{contacto.rtn}</td>
              <td>{contacto.direccion}</td>
              <td>{contacto.nombrepieza}</td>
              <td>
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleOnEdit(index)}>Editar</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleOnDelete(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contactos;
