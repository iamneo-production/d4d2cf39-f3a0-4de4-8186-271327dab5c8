package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/insurance")
@CrossOrigin(origins = "http://localhost:3000") // Replace with your frontend's domain
public class InsuranceController {
    private InsuranceService insuranceService;

    @Autowired
    public InsuranceController(InsuranceService insuranceService) {
        this.insuranceService = insuranceService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody InsuranceModel insuranceModel) {
        boolean isUserExists = insuranceService.checkUserExists(insuranceModel.getEmail());
        if (isUserExists) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists");
        }

        InsuranceModel createdInsurance = insuranceService.createInsurance(insuranceModel);
        if (createdInsurance != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdInsurance);
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to signup");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody InsuranceModel loginModel) {
        InsuranceModel foundInsurance = insuranceService.findInsuranceByEmail(loginModel.getEmail());
        if (foundInsurance != null && foundInsurance.getPassword().equals(loginModel.getPassword()) && foundInsurance.getFirstName().equals(loginModel.getFirstName())) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
