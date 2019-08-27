const express = require('express')
const app = express()
var nunjucks  = require('nunjucks');

const port = 8080
const helper = require('./helper')
const url = 'https://randomuser.me/api/?results=20&inc=gender,name,email,dob,picture&nat=us,fr'

nunjucks.configure('views', {
  autoescape: true,
  express   : app
});


app.get('/users', (req, res) => {
	helper.data(url)
    .then(response => {
		const users = response.results.sort((a, b) => a.dob.age - b.dob.age)
		res.render('index.html', {users})
    })
    .catch(error => {
        res.send(error)
	})
})

function gender(param){
	if(param == 'male') return helper.data(url + '&gender=male')
	else if (param == 'female') return helper.data(url + '&gender=female')
	return Promise.reject('Bad gender, (only "male" or "female")')
}

app.get('/users/:gender', (req, res) => {
	gender(req.params.gender)
    .then(response => {
		const users = response.results.sort((a, b) => a.dob.age - b.dob.age)
		res.render('index.html', {users})
    })
    .catch(error => {
		console.error(error)
        res.send(error)
    })
})

app.get('**', (req, res) => {
	res.redirect('/users');
})

app.listen(port, () => console.log(`App listening on port ${port}!`))