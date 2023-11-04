const Checkout = ({ capturarDatos, enviarFormulario }) => {
  return (
    <div>
      <h1>Estoy en el Checkout</h1>
      <form onSubmit={enviarFormulario}>
        <input
          type="text"
          name="nombre"
          placeholder="nombre"
          onChange={capturarDatos}
        />
        <input
          type="text"
          name="apellido"
          placeholder="apellido"
          onChange={capturarDatos}
        />
        <input
          type="text"
          name="telefono"
          placeholder="teléfono"
          onChange={capturarDatos}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={capturarDatos}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Checkout;
