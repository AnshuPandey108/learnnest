import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentsService {
    private student = [
        { id: 1, name: "Anshu", age: 24 },
        { id: 2, name: "Aman", age: 28 },
        { id: 3, name: "Shubham", age: 23 },
        { id: 4, name: "Abhishek", age: 28 }
    ]

    //Get 
    getAllStudents() {
        return this.student;
    }

    //Get by id
    getStudentById(id: Number) {
        const student = this.student.find((s) => s.id === id);
        if (!student) throw new NotFoundException("Student not found!");
        return student;
    }
    //Post
    createStudent(data: { name: string, age: number }) {
        const newStudent = {
            id: Date.now(),
            ...data,
        }
        this.student.push(newStudent);
        return newStudent;
    }

    //Put

    updateStudent(id: number, data: { name: string, age: number }) {
        const index = this.student.findIndex((s) => s.id === id);
        if (index === -1) throw new NotFoundException("Student not found");
        this.student[index] = { id, ...data };
        return this.student[index];

    }

    //Patch
    patchStudent(id: number, data: { name?: string, age?: number }) {
        const index = this.student.findIndex((s) => s.id === id);
        if (index === -1) throw new NotFoundException("Student not found");
        this.student[index] = { ...this.student[index], ...data };
        return this.student[index];
    }

    //Delete
    deleteStudent(id: number) {
        const index = this.student.findIndex((s) => s.id === id);
        if (index === -1) throw new NotFoundException("Student not found");
        const deletedStudent = this.student.splice(index, 1);
        return deletedStudent[0];
    }

}
