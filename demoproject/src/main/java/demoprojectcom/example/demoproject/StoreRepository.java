package demoprojectcom.example.demoproject;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StoreRepository extends JpaRepository<Store, Long> {
    // Custom queries can be added here if needed
}