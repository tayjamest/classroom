package com.classroom.attendance.repository;

import com.classroom.attendance.bo.Attendance;
import org.springframework.data.repository.CrudRepository;

public interface AttendanceRepository extends CrudRepository<Attendance, Long> {
}
