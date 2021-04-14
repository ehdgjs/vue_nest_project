import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(param): string {
    console.log(param.id);
    
    return `Hello World! #${param.id}`;
  }
  postBye(): string {
    return 'Bye World!'
  }
}
