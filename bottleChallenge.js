
function beer(){
    var numbottles = 99;
while(numbottles >= 0){
    var bottleword = "bottle";
    if(numbottles === 1){
        bottleword = "bottles";
    }
    console.log(numbottles + " " + bottleword + " of beer on the wall");
    console.log(numbottles + " " + bottleword + " of beer," );
    console.log("Take one down, pass it around,");
    numbottles--;
    console.log(numbottles + " " + bottleword + " of beer on the wall.");
}
}
beer();
 