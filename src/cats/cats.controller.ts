import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './cats.interfaces';
import { Cat } from 'src/schemas/cat.schema';


@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatsService) { }

    @Get()
    async getAllCats(): Promise<string[]> {
        let cats = await this.catService.findAll();
        return cats.map(cat => cat.name);
    }

    @Post()
    async createCat(@Body() createCatDto: CreateCatDto): Promise<Cat> {
        return this.catService.create(createCatDto);
    }
}
