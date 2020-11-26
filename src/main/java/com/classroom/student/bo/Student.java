package com.classroom.student.bo;

import javax.persistence.*;

@Entity
@Table
public class Student {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    @Column
    private Long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String grade;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }
}
