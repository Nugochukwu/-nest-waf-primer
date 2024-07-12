import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentRegistrationModule } from './student-registration/student-registration.module';

console.log('Database Host:', process.env.DB_HOST);
console.log('Database Port:', process.env.DB_PORT);
console.log('Database Username:', process.env.DB_USERNAME);
console.log('Database Password:', process.env.DB_PASSWORD);
console.log('Database Name:', process.env.DB_DATABASE);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nestwafprimer',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    StudentRegistrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
