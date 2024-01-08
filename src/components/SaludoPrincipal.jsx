import { useState } from "react";

const SaludoPrincipal = ({ saludo }) => {
  const [clave, setClave] = useState("");

  const handleClick = () => {
    if(!clave) {
        setClave('Desde cambiar Estado')
    } else {
        setClave('')
    }
  };
  return (
    <>
      <h1 className="text-center display-1 fw-bold text-uppercase ">
        Hello {saludo} <span className="h1 text-primary">{clave}</span>
      </h1>

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary fw-bold w-50" onClick={handleClick}>
          Click Me!
        </button>
      </div>
    </>
  );
};

export default SaludoPrincipal;
