
// var ctx = document.getElementById("seolinechart8").getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'doughnut',
//     // The data for our dataset

//     data: {
//         labels: ["RMA", "Holding Benjelloun Mezian", "SFCM", "O Capital Group", "CMR", "CDG ", "Groupe MAMDA/MCMA", "Personnel BANK OF AFRICA", "Flottant", "BFCM Groupe CM-CIC", "Group "],

//         datasets: [{
//             backgroundColor: [
//                 "#1A74D3",
//                 "#003C7B",
//                 "#8143FF",
//                 "#4911B9",
//                 "#350C87",
//                 "#78BE19",
//                 "#7EC124",
//                 "#578816",
//                 "#00BDBB",
//                 "#09D8D6",
//                 "#1FF0EE"
//             ],
//             borderColor: '#fff',
//             data: [810, 110, 160, 150, 50, 50, 50, 50, 550, 650, 50],
//         }]
//     },
//     // Configuration options go here
//     options: {

//         legend: {
//             display: true,
//             position:'right',
//             Align:'end',
//             textAlign:'right',

//         },

//         animation: {
//             easing: "easeInOutBack"
//         }
//     }
// });

let divs = document.getElementsByTagName('div');

for (let i = 0; i < divs.length; i++) {

    divs[i].addEventListener('click', function () {

        console.log('this is din nomber' + i);
    })

};


var mySection = document.createElement('section');

mySection.textContent('hello wold');
mySection.body.append();


const value = 10;
let winner = true;
if(value == 10){
    let winner = false;
}

console.log(winner);