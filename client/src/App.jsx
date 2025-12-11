import { useState } from "react";
import SumaController from "./modules/suma.controller.js";

function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSuma = async () => {
    if (!numero1.trim() || !numero2.trim()) {
      alert("Por favor, ingresa ambos números");
      return;
    }

    setLoading(true);

    const response = await SumaController.suma({
      numero1: numero1,
      numero2: numero2
    });

    setLoading(false);

    if (response && !response.error) {
      setMensaje(response.data);
    } else {
      setMensaje(response?.message || "Error al obtener el resultado");
    }
  };


  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Leonardo Daniel Dorantes Castañeda - 10°B</a>
        </div>
      </nav>

      <div className="container mt-4">
        <h2>Calculadora de suma de 2 números</h2>
        <hr />
        <div className="row">
          <div className="col-4">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInput" name="numero1" placeholder="Número 1" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
              <label for="floatingInput">Número 1</label>
            </div>
          </div>
          <div className="col-4">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInput" name="numero2" placeholder="Número 2" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
              <label for="floatingInput">Número 2</label>
            </div>
          </div>
          <div className="col-4">
            <button onClick={handleSuma} className="btn btn-primary col-12 h-100">Calcular suma</button>
          </div>
        </div>
        <br />
        <h3>Resultado: {mensaje}</h3>
      </div>
    </>
  )
}

export default App