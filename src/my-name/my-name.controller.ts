import { Controller, Post, Body } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('myname')
export class MyNameController {
    @Post('custom')
    transformName(@Body('name', new UppercasePipe()) name: string): { message: string } {
        return {message: `Received name: ${name}`};
    }
}
