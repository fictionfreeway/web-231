/*
    Title: watlington-javazon.js
    Author: William Watlington
    Date: 4/30/2022
    Description: Script for watlington-javazon.html
 */

class Product {
    constructor(id, description, price, quantity) {
        this.id = id;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    get total() {
        return (this.quantity * this.price).toFixed(2);
    }
}

class Service {
    constructor(id, description, hourlyRate, min) {
        this.id = id;
        this.description = description;
        this.hourlyRate = hourlyRate.toFixed(2);
        this.min = min;
    }
}

class Employee {
    constructor(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary.toFixed(2);
    }
}

const watchmen = new Product(79543, "Watchmen Graphic Novel", 25.50, 4);
const leviathan = new Product(46873, "Leviathan Wakes Novel", 19.99, 10);
const caliban = new Product(79841, "Caliban's War Novel", 19.99,  3);
const verity = new Product(44862, "Verity Paperback Novel", 9.50, 45);
const abaddon = new Product(79246, "Abaddon's Gate Novel", 19.99, 2);

const productsArr = [watchmen, leviathan, caliban, verity, abaddon];

const publish = new Service(78921, "Digital Book Publishing", 40.00, 5);
const review = new Service(15763, "Review Manuscript", 70.00, 3);
const ghostWrite = new Service(75154, "Ghost Writing", 150.00, 10);

const servicesArr = [publish, review, ghostWrite];

const emp1 = new Employee(76512, "Jim", "Hopkins", 80000);
const emp2 = new Employee(15785, "Kayla", "Moore", 45000);
const emp3 = new Employee(67154, "James", "Corey", 120000);
const emp4 = new Employee(34876, "James", "Holden", 35000);
const emp5 = new Employee(82495, "Naomi", "Miller", 94500);

const employeesArr = [emp1, emp2, emp3, emp4, emp5];

const products = document.getElementById("products");
const services = document.getElementById("services");
const employees = document.getElementById("employees");

products.style.display = "none";
services.style.display = "none";
employees.style.display = "none";


//gets user selection from drop down menu and shows correct corresponding objects
function displayListing() {
    let dropDownMenu = document.getElementById("listing");
    let choice = dropDownMenu.options[dropDownMenu.selectedIndex].value;
    //reset all display properties to none
    products.style.display = "none";
    services.style.display = "none";
    employees.style.display = "none";

    //show chosen table
    switch(choice) {
        case "products":
            products.style.display = "block";
            break;
        case "services":
            services.style.display = "block";
            break;
        case "employees":
            employees.style.display = "block";
            break
    }
}


//add contents of corresponding object arrays to correct tables
productsArr.forEach(product => {
    let tr = document.createElement('tr')
    tr.innerHTML = "<td>" + [product.id, product.description, product.price, product.quantity, product.total].join("</td><td>") + "</td>";
    products.appendChild(tr);
});

servicesArr.forEach(service => {
    let tr = document.createElement('tr')
    tr.innerHTML = "<td>" + [service.id, service.description, service.hourlyRate, service.min].join("</td><td>") + "</td>";
    services.appendChild(tr);
});

employeesArr.forEach(employee => {
    let tr = document.createElement('tr')
    tr.innerHTML = "<td>" + [employee.id, employee.lastName, employee.firstName, employee.salary].join("</td><td>") + "</td>";
    employees.appendChild(tr);
});