function printhobbies(arrOfObjects){
    for(var i=0; i<arrOfObjects.length; i++){
        console.log(arrOfObjects[i]['hobbies']);
    }
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
     }
     
];

printEmails(users);
