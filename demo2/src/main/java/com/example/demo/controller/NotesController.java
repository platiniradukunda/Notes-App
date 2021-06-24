package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Notes;
import com.example.demo.service.NotesService;

@CrossOrigin
@RestController  // sets this class as a controller. This is kinda like our api
///cart: endpoint for our base url. so everyone will send a request starting from the base url
@RequestMapping("/notes")
public class NotesController {
	
	@Autowired // eliminates having to instantiate objects and having to make beans
	NotesService notesservice;
	
	// get all items
	// get mapping not specified to url so it defaults to /notes
	@GetMapping  // this is to map the HTTP method of GET to the getItems method
	public Iterable <Notes> getItems() {
		return notesservice.getItems();	
	}
	
	// get item by id
	@GetMapping("/{id}") // this is to map the HTTP method of GET to the getItemById method
	public Notes getItemById(@PathVariable Long id) {
		return notesservice.getItemById(id);
	}
	
	// create item. Also defaults to /notes
	@PostMapping
	public Notes createItem(@RequestBody Notes item) {
		return notesservice.createItem(item);
	}
	
	// update our items
	@PatchMapping // this is to map the HTTP method of UPDATE to the updateItem method
	public Notes updateItem(@RequestBody Notes item) {
		return notesservice.updateItems(item);
	}
	
	// delete our items by id
	@DeleteMapping("/{id}")
	// PathVariable is an annotations that takes the id variable and puts it for the @DeleteMapping annotation
	public HttpStatus deleteItem(@PathVariable Long id) {
		return notesservice.deleteItem(id);
	}	
}
