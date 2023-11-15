import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignModule } from './sign/sign.module';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [SignModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
