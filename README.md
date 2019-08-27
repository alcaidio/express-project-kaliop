# express-project-kaliop
The app shows 20 people by age growing at random and we can sort by genre
## Subject
Créer un projet Express avec les fonctionalités suivantes:

- Peut être lancé en local sur un port de votre choix
- Expose une url GET sous la forme /users/[gender] où gender est optionel et ne peut avoir comme valeur uniquement 'male' ou 'female', afficher une erreur pour toute autre valeur
- En accédant à cette URL, le backend devra intéroger l'api 'randomuser.me' pour générer une liste de 20 users aléatoires (documentation https://randomuser.me/documentation)
- Si le gender a été spécifié dans l'URL, l'api devra être intérogée avec la valeur correspondante pour filtrer une liste d'hommes ou de femmes
- Installer et utiliser le package nunjucks pour formater et présenter le résultat
- Les users devront être triés côté backend par ordre croissant d'âge, le champ correspondant dans le résultat de l'API est 'dob'
- La liste devra présenter nom, prénom, photo, et email de l'utilisateur
- Rédiger un README.md
- Le rendu visuel final a peu d'importance

# Getting Started
Go on your project folder
git clone https://github.com/oncletim/express-project-kaliop.git
cd express-project-kaliop
npm install 
npm start 
Go to http://localhost:8080/

## Prerequisites
You need to have nodejs in your computer

## Built With
Express - Fast, unopinionated, minimalist web framework for Node.js
Nunjucks - A rich and powerful templating language for JavaScript.
RANDOM USER GENERATOR - A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.

## Authors
Timothy ALCAIDE @oncletim

## License
This project is licensed under the MIT License
