import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntityUml } from "./user/entities/user.entity.uml";
import { UserModule } from './user/user.module';
import { PostEntityUml } from "./post/entities/post.entity.uml";
import { PostModule } from './post/post.module';
import { TaskEntityUml } from "./task/entities/task.entity.uml";
import { TaskModule } from './task/task.module';
import { HttpExceptionFilter } from './http.exception.filter';
import {APP_FILTER, APP_PIPE} from "@nestjs/core";
import {Module, ValidationPipe} from "@nestjs/common";

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'dpg-cnqqkja0si5c73bs8o60-a.oregon-postgres.render.com',
        port: 5432,
        username: 'labs_db_user',
        password: '8AFi5uGeSXxzqVbqNGRVp4Z2Ncf2kdpX',
        database: 'labs_db',
        synchronize: true,
        entities: [UserEntityUml,PostEntityUml,TaskEntityUml],
        ssl: true,
      }),
      UserModule,
      TaskModule,
      PostModule,
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },],
})

export class AppModule { }

