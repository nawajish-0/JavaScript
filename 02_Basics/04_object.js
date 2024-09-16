// const tinderUser = new Object()  //singleton
const  tinderUser = {};

tinderUser.id = "123abc"
tinderUser.name = "level"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser ={
    email : "hm@gmail.com",
    fullname :{                       //nesting of objects
        userfullname:{
            firstname:"level",
            lastname:"jack"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);  

//merging of objects

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
const obj3 = {5:'a',6:'b'}

//const obj3 = {obj1,obj2};  // returns objects in object
// const obj4 = Object.assign({},obj1,obj2,obj3)  // assign(target, source)
// console.log(obj4);

//easy and most used method

const obj4 = {...obj1,...obj2,...obj3};
console.log(obj4);

//array of objects

const users = [
    {id:1,
     email:"a"   
    },
    {id:2,
     email:"b"   
    },
    {id:3,
     email:"c"   
    },
    
]

console.log(users[0].id)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // will make array of key,value together

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//object de-structure

const course = {
    coursename:"js course",
    price:"free",
    courseInstructor:"level"
}

course.courseInstructor //normal method

const {courseInstructor:teacher} = course

console.log(teacher);


// {
//     "name": "level",
//     "coursename": "js",
//     "price": "free"
// }

//json in array format
[
    {},
    {},
    {}
]