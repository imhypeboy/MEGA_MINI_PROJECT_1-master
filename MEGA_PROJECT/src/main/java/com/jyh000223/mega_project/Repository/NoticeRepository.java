package com.jyh000223.mega_project.Repository;

import com.jyh000223.mega_project.Entities.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Project, Integer> {
}
