package com.classroom.attendance.controller;

public class Report {
    private Long studentId;
    private Long subjectId;
    private int month;
    private int classesAttended;
    private int classesMissed;

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Long subjectId) {
        this.subjectId = subjectId;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getClassesAttended() {
        return classesAttended;
    }

    public void setClassesAttended(int classesAttended) {
        this.classesAttended = classesAttended;
    }

    public int getClassesMissed() {
        return classesMissed;
    }

    public void setClassesMissed(int classesMissed) {
        this.classesMissed = classesMissed;
    }
}
