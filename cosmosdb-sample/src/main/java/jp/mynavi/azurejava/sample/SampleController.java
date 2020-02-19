package jp.mynavi.azurejava.sample;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.azure.data.cosmos.PartitionKey;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import reactor.core.publisher.Mono;

@RestController
public class SampleController {

	private static final Logger logger = LoggerFactory.getLogger(SampleController.class);

	@Autowired
	private EmployeeRepository repository;

        @RequestMapping("/hello")
        public String index() {
                return "Hello Spring Boot!";
        }

	/**
 	 * 新規登録
 	 */ 
        @GetMapping("/add")
	public ResponseEntity<String> addEmployee(@RequestParam("id") String id, 
				@RequestParam("fname") String firstName,
				@RequestParam("lname") String lastName,
				@RequestParam("pos") String position) {
		try {
			final Employee employee = new Employee(id, firstName, lastName, position);
			logger.info("ADD - Received an item: " + employee.toString());
			final Employee savedEmployee = repository.save(employee).block();
			logger.info("ADD - Saved an item: " + savedEmployee.toString());
			return new ResponseEntity<String>("Entity created", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("Entity creation failed", HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * 検索
	 */ 
	@GetMapping("/search/{id}")
	public ResponseEntity<?> getEmployee(@PathVariable("id") String id) {
		try {
			logger.info("SEARCH - param: " + id);
			final Employee findEmployee = repository.findById(id).block();
			logger.info("SEARCH - Find an item: " + findEmployee.toString());
			return new ResponseEntity<Employee>(findEmployee, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>(id + " not found", HttpStatus.NOT_FOUND);
		}
	}

	/**
 	 * 削除
 	 */
	@GetMapping("/delete/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") String id) {
		try {
			logger.info("DELETE - param: " + id);
			final Employee findEmployee = repository.findById(id).block();
			logger.info("DELETE - Find an item: " + findEmployee.toString());
			repository.deleteById(id, new PartitionKey(findEmployee.getPosition())).block();
			logger.info("DELETE - Deleted an item: " + findEmployee.toString());
			return new ResponseEntity<String>("Entity deleted", HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<String>("Entity deletion failed", HttpStatus.NOT_FOUND);
		}
	}
}
