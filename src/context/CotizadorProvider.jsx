import { useState, createContext } from "react";
import { formatearDinero, obtenerDiferenciaYear } from "../helpers";
import { calcularMarca } from "../helpers";
import { calcularPlan } from "../helpers";

const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,

      [e.target.name]: e.target.value,
    });

    console.log(e.target.value);
    console.log(e.target.name);
  };

  const cotizarSeguro = () => {
    let resultado = 2000;
    const diferencia = obtenerDiferenciaYear(datos.year);
    console.log(diferencia);

    resultado -= (diferencia * 3 * resultado) / 100;

    resultado *= calcularMarca(datos.marca);

    resultado *= calcularPlan(datos.plan);

    resultado = formatearDinero(resultado);

    setCargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 3000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};
export default CotizadorContext;
export { CotizadorProvider };
