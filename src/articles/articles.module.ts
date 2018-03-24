import { Module } from '@nestjs/common';
import { ArticleService } from './articles.service';
import { ArticleController } from './articles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './articles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  components: [ArticleService],
  controllers: [ArticleController],
})
export class ArticlesModule {}