import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './articles.service';
import { Article } from './articles.entity';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articlesService: ArticleService) {}

  @Get()
  async findAll(): Promise<Article[]> {

    return await this.articlesService.findAll();
  }
}