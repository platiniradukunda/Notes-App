package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.model.Notes;
import com.example.demo.repository.NotesRepository;

@Service
public class NotesService {
	
	@Autowired
	NotesRepository notesrepository;
	
	// get all items
	public Iterable <Notes> getItems() {
		return notesrepository.findAll();
	}
	
	// get items by id
	public Notes getItemById(Long id) {
		return notesrepository.findById(id).get();
	}
	
	// post / create
	public Notes createItem(Notes item) {
		return notesrepository.save(item);
	}
	
	// update our items
	public Notes updateItems(Notes item) {
		return notesrepository.save(item);
	}
	
	// delete our items
	public HttpStatus deleteItem(Long id) {
		notesrepository.deleteById(id);
		return HttpStatus.OK;
	}
	
}
