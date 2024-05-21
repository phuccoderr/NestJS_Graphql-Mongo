import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { LessonType } from 'src/lesson/lesson.type';
import { AssignStudentsToLessonInput } from 'src/lesson/assign-students-to-lesson.input';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
