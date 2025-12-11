const SumaController = {};
const ENV = import.meta.env;

SumaController.suma = async (data) => {
    try {
        console.log('Datos a enviar:', JSON.stringify(data));
        console.log('URL:', ENV.VITE_API_URL);
        
        const response = await fetch(`${ENV.VITE_API_URL}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        console.log('Status:', response.status);
        console.log('Status OK:', response.ok);
        
        const result = await response.json();
        console.log('Respuesta del servidor:', result);
        
        return result;
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: error.message };
    }
};

export default SumaController;