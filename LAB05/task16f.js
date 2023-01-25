function findByUsername(arrOfObjects, val){
    obj = [];
    for(var i=0; i<arrOfObjects.length; i++){
        if(arrOfObjects[i]['username'] == val){
            obj.push(arrOfObjects[i]);
        }
    }
    return obj;
}


let users = [
     {
         username: 'Samad',
         email: 'samad@gmail.com',
         yearsExperience: 10.5,
         favoriteLanguages: ['C3', 'Java', 'C++'],
         favoriteEditor: 'Eclips',
         hobbies: ['Drving car', 'bike Rider', 'listing songs'],
         hometown: {
             city: 'Nawab Shah',
             state: 'Zero point'
        }
     },
     {
         username: 'jack',
         email: 'samad@gmail.com',
         yearsExperience: 10.5,
         favoriteLanguages: ['C3', 'Java', 'C++'],
         favoriteEditor: 'Eclips',
         hobbies: ['Drving car', 'bike Rider', 'listing songs'],
         hometown: {
             city: 'Nawab Shah',
             state: 'Zero point'
        }
    },
    {
        username: 'samad',
         email: 'samad@gmail.com',
         yearsExperience: 10.5,
         favoriteLanguages: ['C3', 'Java', 'C++'],
         favoriteEditor: 'Eclips',
         hobbies: ['Drving car', 'bike Rider', 'listing songs'],
         hometown: {
             city: 'Nawab Shah',
             state: 'Zero point'
         }
     }
     
];
console.log(findByUsername(users, 'samad'));
console.log(findByUsername(users, 'jack'));

