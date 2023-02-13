#Log file

## 1 Log 06/12/2022 entries

HR Database ==> CRUD API behind?
> Actions appearing: `GET`, `POST`, `DELETE` | no `UPDATE`

Using common sense we managed to create a test plan.
Knowing the CRUD actions it is fairly simple.

Navigate to each page and test every action.
The goal is to compare the expected output/result to the actuel one.

We tested user inputs with every type of inputs.

After running the tests by hand we use GitHub issues to keep track of bugs.

## 2 Log

We identified more bugs that are reported in the GitHub issues page with their respective time and day.

We carefully re run our tests manually to complete or second batch. With a complete test plan it is easy to track bugs as we had nothing to do but to run them.

## 3 Log

We then implemented our tests using best pratices we found online.

UI testing is kinda tricky at first because it is not always about the result but the app's behaviour.
We chose TypeScript for testing and separated every aspect of the application in our tests' files.

## Conclusion of our logs

We got use to UI testing as the type of results are not always of the type we expected (that does not mean a test fails).
Playwright is awesome as it is simple to use.

One thing to think about when integrating UI tests in CI/CD or when using a dev env is applications do not always have data attached to them (a test db). Some data may not be necessary. This is why we need to think about a database seed to put relevant and correct data.

**CHECK PREVENTED ACTIONS**

---
### Test planning

#### GET employee(s)é

- **Valid values**  
`{name: "string", email: "string", manager: true}`

- **Invalid values**  
`{name: "stØing", email: "string", manager: true}`
`{name: !different from string!, email: "string", manager: "boolean"}`
`{name: "", email: "string", manager: true}`
`{name: "string", email: "string"}`

- **Boundary values**  
String too long:
`{name: "stringstringstringstring...", email: "string", manager: true}`

#### POST/UPDATE employee

- **Valid values**
	- Name  
	`name: "string"`
	- Email  
	`email: "example@email.com"`
	- Address  
	`{address: "string", city: "string", zip_code: 11111}`
	- Contract // *forbidden for UPDATE*  
	`{hiring_date: 06/12/2022, job_title: "string"}`

- **Invalid values**
	- Name  
	`name: ""`
	`name: !different from string!`
	- Email  
	`email: "exampleemail.com"`
	`email: "exØmple@email.com"`
	`email: ""`
	`email: !different from email!`
	- Address  
	`{address: "", city: "string", zip_code: 11111}`
	`{address: !different from string!, city: "string", zip_code: 11111}`
	`{city: "string", zip_code: 11111}`
	- Contract // *forbidden for UPDATE*  
	`{hiring_date: !out of range!, job_title: "string"}`
	`{hiring_date: !different from date!, job_title: "string"}`

- **Boundary values**
	- Name 
	`name: "stringstringstring"`
	- Email  
	`email: "exampleexampleexampleexample@emailemailemail.com"`
	- Address  
	`{address: "stringstringstringstring", city: "string", zip_code: 11111}`
	- Contract // *forbidden for UPDATE*  
	`{hiring_date: !possible date boundaries!, job_title: "string"}`
	`{hiring_date: 12/12/2022, job_title: "stringstringstring"}`
	
#### DELETE employee(s)

- **Valid values**  
`{name: "string", email: "string", manager: true}`

- **Invalid values**  
`none existing employee`

- **Boundary values**  
String too long:
`first employee || last employee`

#### Example

- Valid values 

- Invalid values

- Boundary values

> It is the same process for teams meaning the same tests could be written.


### UI Test planning

#### Action

- Register

- Redirect

- Effect

- Behaviour

#### Home Button

- Should redirect to home

#### List Employees Button

- Should Go to employees page

#### Add Employee Button

- Should add a employee
- Redirect to employee's page if inputs correct

#### Delete employee

- Remove employee from list

#### Edit employee

- Should redirect to edit form

if confirmed 

- Should alter employee
- Redirect to employee's list

---

Layout / displays

- Test if all elements are displayed

- Test if layout is respected

- Test if data are displayed and correct



