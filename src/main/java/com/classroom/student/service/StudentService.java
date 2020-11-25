package com.classroom.student.service;

import com.classroom.student.bo.Student;
import com.classroom.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudentService {
    private StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student save(Student student) {
        return this.studentRepository.save(student);
    }

    public List<Student> getStudents() {
        List<Student> studentList = new ArrayList<Student>();
        this.studentRepository.findAll().iterator().forEachRemaining(studentList::add);
        return  studentList;
    }
}
