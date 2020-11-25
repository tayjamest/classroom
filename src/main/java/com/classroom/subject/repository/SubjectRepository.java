package com.classroom.subject.repository;

import com.classroom.subject.bo.Subject;
import org.springframework.data.repository.CrudRepository;

public interface SubjectRepository extends CrudRepository<Subject, Long> {
}
