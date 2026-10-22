package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Service.TmdbService;

import java.util.Map;

@RestController 
public class SceneController {

    private final TmdbService tmdbService;
    
    public SceneController(TmdbService tmdbService){
        this.tmdbService = tmdbService;
    }
    
    @GetMapping ("/")
    public String home(){
        return "Welcome to Scene!";
    }

    @GetMapping("/api/status")
    public Map<String, String> status(){
        return Map.of(
            "app", "Scene",
            "status", "running"
        );
    }

    @GetMapping ("/api/movies/popular")
    public String popularMovies(){
        return tmdbService.getPopularMovies();
    }
}
