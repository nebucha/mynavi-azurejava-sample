package jp.mynavi.azurejava.sample;

import com.microsoft.azure.spring.data.cosmosdb.core.mapping.Document;
import com.microsoft.azure.spring.data.cosmosdb.core.mapping.PartitionKey;
import org.springframework.data.annotation.Id;

@Document(collection = "Employee")
public class Employee {
	@Id
	private String id;
	private String firstName;
	private String lastName;

	@PartitionKey
	private String position;

	public Employee(String id, String firstName, String lastName, String position) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.position = position;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() { 
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	@Override
	public String toString() {
		return firstName + " " + lastName + ", " + position;
	}
}
