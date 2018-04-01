import { Component } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './articles.entity';

@Component()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articlesRepository: Repository<Article>,
  ) {}

  async findAll(): Promise<Article[]> {
    return await this.articlesRepository.find();
  }
  async findOneById(id): Promise<Article> {
    return await this.articlesRepository.findOneById(id);
  }
  async create(article){

    return await this.articlesRepository.insert(article);
  }
}