package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InsuranceService {
    private InsuranceRepository insuranceRepository;

    @Autowired
    public InsuranceService(InsuranceRepository insuranceRepository) {
        this.insuranceRepository = insuranceRepository;
    }

    public boolean checkUserExists(String email) {
        InsuranceModel existingUser = insuranceRepository.findByEmail(email);
        return existingUser != null;
    }

    public InsuranceModel createInsurance(InsuranceModel insuranceModel) {
        try {
            return insuranceRepository.save(insuranceModel);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public InsuranceModel findInsuranceByEmail(String email) {
        return insuranceRepository.findByEmail(email);
    }
}
