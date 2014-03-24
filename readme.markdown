# WPSRestTest

WPSRestTest is a simple Node+Express web service that can be used to test RESTful service calls.

## Endpoints

**/get**  
Returns the stored data as JSON.  

Method: GET  
Example: http://example.com/get  

**/post**  
Adds the request body to the stored data.  

Method: POST  
Example: http://example.com/post
Request Body: name=Kirby&city=Stowe  

**/put/:id**  
Updates the stored data. *:id* is the index to element to update in the data array. Note the data array is zero based.  

Method: PUT  
Example: http://example.com/put/1  
Request Body: name=Kirby&city=Stowe&state=Vermont

**/delete/:id**  
Deletes the data stored in the data array. *:id* is the index to element to delete in the data array. Note the data array is zero based.  

Method: DELETE  
Example: http://example.com/delete/1  

**/resetdata**  
Clears the stored data.  

Method: POST  
Example: http://example.com/resetdata  
Request Body: \**ignored\**  
