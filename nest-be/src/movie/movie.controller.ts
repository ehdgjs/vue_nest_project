import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MovieService } from './movie.service';

@Controller('/movie')
export class MovieController {

    constructor(private readonly movieService: MovieService) {};

    @Get()
    getAll(): Movie[] {
        return this.movieService.getAll();
    }

    @Get('search')
    search(@Query('year') searchingYear: string){
        return `We are searching for a movie made after: ${searchingYear}`;
    }

    @Get('/:id')
    getOne(@Param("id") id: string): Movie {
        return this.movieService.getOne(id);
    }

    @Post()
    create(@Body() movieData){
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    delete(@Param("id") id: string){
        return this.movieService.deleteOne(id);
    }

    @Patch('/:id')
    patch(@Param("id") id: string, @Body() updateData){
        return {
            updateMovie: id,
            ...updateData,
        };
    }
}
