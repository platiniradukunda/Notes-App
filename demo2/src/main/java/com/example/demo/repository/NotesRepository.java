package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.model.Notes;

public interface NotesRepository extends CrudRepository<Notes, Long> {

}
