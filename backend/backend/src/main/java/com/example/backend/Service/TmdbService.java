
package com.example.backend.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

@Service
public class TmdbService {

    private final RestClient restClient;

    public TmdbService(
            @Value("${tmdb.access-token}") String accessToken) {

        this.restClient = RestClient.builder()
                .baseUrl("https://api.themoviedb.org/3")
                .defaultHeader(
                    "Authorization",
                    "Bearer " + accessToken)
                .defaultHeader(
                "accept",
                "application/json")
                .build();
    }

    public String getPopularMovies() {
        return restClient.get()
                .uri("/movie/popular")
                .retrieve()
                .body(String.class);
    }
}
