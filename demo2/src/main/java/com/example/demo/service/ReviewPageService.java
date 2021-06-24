package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.example.demo.model.ReviewPage;
import com.example.demo.repository.ReviewPageRepository;

@Service
public class ReviewPageService {
	
	@Autowired
	ReviewPageRepository reviewpagerepository;
	
	public Iterable <ReviewPage> getItems() {
		return reviewpagerepository.findAll();
	}
	
	// get items by id
	public ReviewPage getItemById(Long id) {
		return reviewpagerepository.findById(id).get();
	}
	
	// post / create
	public ReviewPage createItem(ReviewPage item) {
		return reviewpagerepository.save(item);
	}
	
	// update our items
	public ReviewPage updateItems(ReviewPage item) {
		return reviewpagerepository.save(item);
	}
	
	// delete our items
	public HttpStatus deleteItem(Long id) {
		reviewpagerepository.deleteById(id);
		return HttpStatus.OK;
	}
	
}
