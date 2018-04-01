import { Controller, Param, Get, Post, Body } from '@nestjs/common';
import { ArticleService } from './articles.service';
import { Article } from './articles.entity';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articlesService: ArticleService) {}

  @Get()
  async getAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }
  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Article> {
    return this.articlesService.findOneById(id);
  }
  @Post()
  async create(@Body() article: Article) {
    article.imageUrl = article.imageUrl || '';
    article.description = article.description || '';
    article.isPublished = article.isPublished || false;

    try {
      let model = await this.articlesService.create(article);
      return {
        result: 'ok',
      };
    } catch {
      return {
        result: 'fail',
        message: 'err',
      };
    }
  }
}
