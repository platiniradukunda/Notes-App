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

import com.example.demo.model.ReviewPage;
import com.example.demo.service.ReviewPageService;

@CrossOrigin
@RestController  // sets this class as a controller. This is kinda like our api
// /review: endpoint for our base url. so everyone will send a request starting from the base url
@RequestMapping("/review")
public class ReviewPageController {
	
	@Autowired // eliminates having to instantiate objects and having to make beans
	ReviewPageService reviewpageservice;
	
	
	// get all items
	// get mapping not specified to url so it defaults to /review
	@GetMapping  // this is to map the HTTP method of GET to the getItems method
	public Iterable <ReviewPage> getItems() {
		return reviewpageservice.getItems();	
	}
	
	// get item by id
	@GetMapping("/{id}") // this is to map the HTTP method of GET to the getItemById method
	public ReviewPage getItemById(@PathVariable Long id) {
		return reviewpageservice.getItemById(id);
	}
	
	// create item. Also defaults to /review
	@PostMapping
	public ReviewPage  createItem(@RequestBody ReviewPage item) {
		return reviewpageservice.createItem(item);
	}
	
	// update our items
	@PatchMapping // this is to map the HTTP method of UPDATE to the updateItem method
	public ReviewPage  updateItem(@RequestBody ReviewPage item) {
		return reviewpageservice.updateItems(item);
	}
	
	// delete our items by id
	@DeleteMapping("/{id}")
	// PathVariable is an annotations that takes the id variable and puts it for the @DeleteMapping annotation
	public HttpStatus deleteItem(@PathVariable Long id) {
		return reviewpageservice.deleteItem(id);
	}
	
}
