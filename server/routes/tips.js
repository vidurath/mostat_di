const express = require('express')
const knex = require('../config/knex')
const axios = require("axios");
const router = express.Router();


router.get('/dashboard',async(req, res) => {        

    let test = await knex.select('name','location').table('gardens').then( (result) => {
        res.render('pages/index', {title: 'Dashboard', data:result});
    })
    // try {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://elenasport-io1.p.rapidapi.com/v2/upcoming',
    //         params: {page: '1'},
    //         headers: {
    //             'X-RapidAPI-Key': '2964b46066mshdbc793a0dd24fc3p120ae9jsn24362c6acfa0',
    //             'X-RapidAPI-Host': 'elenasport-io1.p.rapidapi.com'
    //         }
    //         };
        
    //         axios.request(options).then(function (response) {
    //             const results = response.data.data;
    //             console.log(results[1]);
    //             results.forEach(element => {
    //                 // console.log(`${element.homeName} vs ${element.awayName}`);
    //             });
    //         })

    // } catch (error) {
    //     console.error(error);
    // }


})

// router.get('https://elenasport-io1.p.rapidapi.com/v2/upcoming',async(req,res) => {
//     await 
// })

router.post('/new', (req, res) => {
    let tipName = req.body.tipsName;
    let tipLocation = req.body.tipsLocation;

    knex('gardens')
    .returning(['name','location'])
    .insert({
        name:tipName,
        location:tipLocation
    })
    .then(gardens =>
        res.json(gardens)    
    )

    // res.redirect('/admin');
})

router.post('/new_tip', (req, res) => {
    let idLeague = req.body.ddlfixture;
    let outcome = req.body.ddloutcome;

    try {
        const options = {
            method: 'GET',
            url: `https://elenasport-io1.p.rapidapi.com/v2/fixtures/${idLeague}`,
            params: {events: 'true', stats: 'true', lineups: 'true'},
            headers: {
                'X-RapidAPI-Key': '2964b46066mshdbc793a0dd24fc3p120ae9jsn24362c6acfa0',
                'X-RapidAPI-Host': 'elenasport-io1.p.rapidapi.com'
            }
            };
        
            axios.request(options).then(function (response) {
                const results = response.data.data;
                results.forEach(element => {
                    let countryName = element.countryName;
                    let leagueName = element.leagueName;
                    let homeTeamName = element.homeName;
                    let awayTeamName = element.awayName;
                    let fixtureDate = element.date;
                    let date = fixtureDate.split(" ")[0];
                    let time = fixtureDate.split(" ")[1];
                    
                    // db('tips')
                    // .returning(['country_name','league_name','fixture_homeTeam','fixture_awayTeam','fixture_outcome','fixture_time','fixture_date'])
                    // .insert({country_name: countryName,league_name: leagueName, fixture_homeTeam: homeTeamName, fixture_awayTeam: awayTeamName, 
                    //     fixture_outcome: outcome, fixture_time: time, fixture_date:date })
                    // .then(data =>
                    //     res.send(data)    
                    // )


                });
            })

    } catch (error) {
        console.error(error);
    }
    
})

router.get('/addTip',(req,res) => {

    try {
        const options = {
            method: 'GET',
            url: 'https://elenasport-io1.p.rapidapi.com/v2/upcoming',
            params: {page: '1'},
            headers: {
                'X-RapidAPI-Key': '2964b46066mshdbc793a0dd24fc3p120ae9jsn24362c6acfa0',
                'X-RapidAPI-Host': 'elenasport-io1.p.rapidapi.com'
            }
            };
        
            axios.request(options).then(function (response) {
                const results = response.data.data;
                res.render('pages/add_tips', {title: 'tips', data:results});
            })

    } catch (error) {
        console.error(error);
    }

    
})


router.get('/allTip',(req,res) => {
    res.render('pages/all_tips', {title: 'Alltips'});
})



module.exports = router;
