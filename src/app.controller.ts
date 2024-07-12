import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  @Render('index.html') // Specify the template relative to the 'views' directory
  getHello2(): {} {
    return this.appService.getHello2();
  }
  @Get('hello')
@Render('home.html')
getHome(): {} {
return this.appService.getHome();
}
@Get('about-us')
@Render('about-us.html')
getAboutUs(): {} {
return this.appService.getAboutUs();
}
@Get('layout')
@Render('layout.html')
getLayout(): {} {
return this.appService.getLayout();
}

}
