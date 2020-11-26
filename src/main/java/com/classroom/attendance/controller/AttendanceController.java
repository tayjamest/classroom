package com.classroom.attendance.controller;

import com.classroom.attendance.bo.Attendance;
import com.classroom.attendance.service.AttendanceService;
import com.classroom.student.bo.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Produces;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AttendanceController {

    private AttendanceService attendanceService;

    @Autowired
    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    @POST
    @Consumes("application/vnd.classroom.attendance-v1.0+json")
    @Produces("application/vnd.classroom.attendance-v1.0+json")
    @RequestMapping("/attendance")
    public Attendance addStudent(@RequestBody Attendance attendance) {
        return this.attendanceService.save(attendance);
    }

    @GET
    @Consumes("application/vnd.classroom.attendance-many-v1.0+json")
    @Produces("application/vnd.classroom.attendance-many-v1.0+json")
    @RequestMapping("/attendance-many")
    public List<Attendance> getAttendance() {
        return this.attendanceService.getMany();
    }

}
