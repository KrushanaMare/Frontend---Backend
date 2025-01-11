package demoprojectcom.example.demoproject;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating, Long> {
    // Custom queries can be added here if needed
}