package demoprojectcom.example.demoproject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RatingService {
    @Autowired
    private RatingRepository ratingRepository;

    public Rating submitRating(Rating rating) {
        return ratingRepository.save(rating);
    }
}