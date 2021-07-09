console.log(localStorage.getItem('Workouts'));
Workouts = JSON.parse(localStorage.getItem('Workouts'));

title = localStorage.getItem('choosen workout').toString();





function Getitem() {
    console.log(title);

    return Workouts.filter(workout => workout.name === title);
}
aa = Getitem();
console.log(aa);
document.write('<p class="style3">' + title + '</p>' + '&nbsp &nbsp &nbsp' + '<br>')
document.write('<p class="style4">' + 'The anatomy of the muscle: ' + '<br><br><br>')
document.write('<p class="style1">' + aa[0].anatomy + '</p>' + '<br><br><br>')
document.write('<p class="style4">' + 'Top 4 best exercices for muscle,strength and more ' + '<br><br><br>')
document.write('<p class="style1">' + aa[0].Exercise1 + '</p>')
document.write('<p class="style1">' + aa[0].Exercise2 + '</p>')
document.write('<p class="style1">' + aa[0].Exercise3 + '</p>')
document.write('<p class="style1">' + aa[0].Exercise4 + '</p>')