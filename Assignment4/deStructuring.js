const user = {
    person: {
        employee: {
            firstname: "Rahul"
        },
        likes: ["Cycling", "Hiking", "Driving"]
    }
}
const {person: {employee}} = user;
const {person: {likes}}= user;

console.log(employee);
console.log(likes[1]);



