import React, { useState } from "react";
import { MARCAS } from "../constants";
import { YEARS, PLANES } from "../constants";
import { Fragment, useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

const Formulario = () => {
  const { modal, cambiarState } = useContext(CotizadorContext);

  return (
    <>
      <button onClick={cambiarState}>Abrir Modal</button>
      <form>
        <div className="my-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="marca"
          >
            Marca
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="">-- Seleccione --</option>
            {MARCAS.map((marca) => (
              <option key={marca.id}>{marca.nombre}</option>
            ))}
          </select>
        </div>
      </form>
      <form>
        <div className="my-5">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="marca"
          >
            Año
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option value="">-- Seleccione Año --</option>
            {YEARS.map((año) => (
              <option key={año}>{año}</option>
            ))}
          </select>
        </div>
      </form>
      <form>
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
                <input type="radio" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          value="Cotizar"
          className="bg-indigo-600 w-full p-3 uppercase text-white cursor-pointer font-bold hover:bg-indigo-900 transition-colors"
        />
      </form>
    </>
  );
};

export default Formulario;
