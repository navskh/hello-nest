import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignModule } from './sign/sign.module';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [SignModule, CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
