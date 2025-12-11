package utez.edu.mx.server.modules;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import utez.edu.mx.server.utils.ApiResponse;

@RestController
@RequestMapping("/api-suma")
@CrossOrigin("*")
public class SumaController {
    private final SumaService sumaService;

    public SumaController(SumaService sumaService) {
        this.sumaService= sumaService;
    }

    @PostMapping("")
    public ResponseEntity<ApiResponse> suma(@RequestBody SumaDTO dto){
        return sumaService.suma(dto);
    }
}


