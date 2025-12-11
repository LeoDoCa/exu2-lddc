package utez.edu.mx.server.modules;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import utez.edu.mx.server.utils.ApiResponse;

@Service
public class SumaService {
    public ResponseEntity<ApiResponse> suma(SumaDTO dto) {
        double suma = dto.getNumero1() + dto.getNumero2();

        String message = String.valueOf(suma);

        ApiResponse body = new ApiResponse(HttpStatus.OK, message, "Operación exitosa");

        return new ResponseEntity<>(body, HttpStatus.OK);
    }
}
