package com.classroom.student.controller;
import com.classroom.student.bo.Student;
import com.classroom.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class StudentController {

    private StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @POST
    @Consumes("application/vnd.classroom.student-v1.0+json")
    @Produces("application/vnd.classroom.student-v1.0+json")
    @RequestMapping("/student")
    public Student addStudent(@RequestBody Student student) {
        return this.studentService.save(student);
    }

    @GET
    @Consumes("application/vnd.classroom.students-v1.0+json")
    @Produces("application/vnd.classroom.students-v1.0+json")
    @RequestMapping("/students")
    public List<Student> getStudents() {
        return this.studentService.getStudents();
    }

}
