import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'yo!';
  }
  getHello2(): {} {
return {message: 'Hello World!', title: 'My Greeting App'};
  }
  getHome(): {} {
    return {title: 'Home Page'};
    }
    getAboutUs(): {} {
    return {title: 'About Us Page'};
  }
  getLayout(): {} {
    return {title: 'Layout Page'};
  }
  getCreateUser(): {} {
    return {title: 'Create User Page'};
  }
}
