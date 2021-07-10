console.log(localStorage.getItem('Recipes'));
Recipes = JSON.parse(localStorage.getItem('Recipes'));

title = localStorage.getItem('choosen recipes').toString();





function Getitem() {
    console.log(title);

    return Recipes.filter(recipes => recipes.name === title);
}
aa = Getitem();
console.log(aa);
document.write('<br><br>')
document.write('<p class="style3">' + title + '</p>' + '&nbsp &nbsp &nbsp' + '<br>')
document.write('<p class="style1">' + aa[0].intro + '</p>' + '<br><br><br>')
document.write('<p class="style4">' + aa[0].recipes1name + '</p>' + '<br><br><br>')
document.write('<p class="style1">' + aa[0].recipes1 + '</p>' + '<br><br><br>')
document.write('<p class="style4">' + aa[0].recipes2name + '</p>' + '<br><br><br>')
document.write('<p class="style1">' + aa[0].recipes2 + '</p>' + '<br><br><br>')
document.write('<p class="style4">' + aa[0].recipes3name + '</p>' + '<br><br><br>')
document.write('<p class="style1">' + aa[0].recipes3 + '</p>' + '<br><br><br>')