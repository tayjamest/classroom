package com.classroom.attendance.service;

import com.classroom.attendance.bo.Attendance;
import com.classroom.attendance.controller.Report;
import com.classroom.attendance.repository.AttendanceRepository;
import com.classroom.student.bo.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class AttendanceService {
    private AttendanceRepository attendanceRepository;

    @Autowired
    public AttendanceService(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    public Attendance save(Attendance attendance) {
        return this.attendanceRepository.save(attendance);
    }

    public List<Attendance> getMany() {
        List<Attendance> attendanceList = new ArrayList<Attendance>();
        this.attendanceRepository.findAll().iterator().forEachRemaining(attendanceList::add);
        return attendanceList;
    }

    public Report generateReport(Report report) {

        List<Attendance> attendances = this.attendanceRepository.findAttendancesByStudentIdEqualsAndSubjectIdEquals(report.getStudentId(), report.getSubjectId());

        report.setClassesAttended(attendances.size());
        report.setClassesMissed(20 - attendances.size());

        return report;
    }

}
