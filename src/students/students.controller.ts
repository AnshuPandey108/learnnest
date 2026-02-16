import { Controller,Get, Param, Post, Body, Put, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) { }
    @Get()
    getAllStudents() {
        return this.studentsService.getAllStudents();
    }

    @Get(':id')
    getStudentById(@Param('id', ParseIntPipe) id: number) {
        return this.studentsService.getStudentById(id);
    }


    @Post()
    createStudent(@Body() body:{name:string,age:number}) {
        return this.studentsService.createStudent(body);
    }

    @Put(':id')
    updateStudent(@Param('id', ParseIntPipe) id: number, @Body() body:{name:string,age:number}) {
        return this.studentsService.updateStudent(id, body);
    }

    @Patch(':id')
    patchStudent(@Param('id', ParseIntPipe) id: number, @Body() body:{name?:string,age?:number}) {
        return this.studentsService.patchStudent(id, body);
    }

    @Delete(':id')
    deleteStudent(@Param('id', ParseIntPipe) id: number) {
        return this.studentsService.deleteStudent(id);
    }

}
 