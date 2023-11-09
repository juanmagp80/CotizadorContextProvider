import { MARCAS } from "../constants";
import { YEARS, PLANES } from "../constants";
import { Fragment } from "react";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

const Formulario = () => {
  const { datos, handleChangeDatos, error, setError, cotizarSeguro } =
    useCotizador();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando datos");

    if (Object.values(datos).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    cotizarSeguro();
  };

  return (
    <>
      {error && <Error />}

      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="marca"
          >
            Marca
          </label>
          <select
            value={datos.marca}
            name="marca"
            onChange={(e) => handleChangeDatos(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">-- Seleccione --</option>
            {MARCAS.map((marca) => (
              <option value={marca.id} key={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="marca"
          >
            Año
          </label>
          <select
            value={datos.year}
            onChange={(e) => handleChangeDatos(e)}
            name="year"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">-- Seleccione Año --</option>
            {YEARS.map((año) => (
              <option key={año}>{año}</option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="marca"
          >
            Elige un Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChangeDatos(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="Cotizar"
        />
      </form>
    </>
  );
};

export default Formulario;
