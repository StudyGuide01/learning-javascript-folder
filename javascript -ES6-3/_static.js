class User{
constructor(name, age){
this.name = name;
this.age = age;
}

static sortByAge(user1, user2){
// return user1.name - user2.name;
 return user1.name.localeCompare(user2.name);
}
}

const user1 =  new User('javed',40);
const user2 =  new User('john',30);
const user3 =  new User('aiyakat',20);

const users = [user1, user2, user3];

//sort without static 
// users.sort((a, b)=>a.age-b.age);


//sort with static 
users.sort(User.sortByAge);

console.log(users);

//  console.log(user1,user2,user3);