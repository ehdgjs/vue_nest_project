import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
    private movies: Movie[] = [];
    
    getAll(): Movie[] {
        return this.movies;
    }

    getOne(id: string): Movie {
        const movie = this.movies.find(movie => movie.id === parseInt(id));
        if(!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`)
        }
        return movie;
    }

    deleteOne(id: string): boolean{
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== +id);
        return true;
    }

    create(movieData){
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData,
        })
    }
    update(id: string, updateData){
        
    }
}
