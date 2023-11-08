import { useState, createContext } from "react";

const CotizadorContext = createContext();
const CotizadorProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const cambiarState = () => {
    setModal(!modal);
  };

  return (
    <CotizadorContext.Provider
      value={{
        modal,
        setModal,
        cambiarState,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export default CotizadorContext;
export { CotizadorProvider };
