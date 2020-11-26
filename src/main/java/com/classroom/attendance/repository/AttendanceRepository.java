package com.classroom.attendance.repository;

import com.classroom.attendance.bo.Attendance;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AttendanceRepository extends CrudRepository<Attendance, Long> {

    @Query(value = "FROM Attendance WHERE studentId = ?1 AND subjectId = ?2")
    List<Attendance> findAttendancesByStudentIdEqualsAndSubjectIdEquals(Long studentId, Long subjectId);
}
