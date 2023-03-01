var jmlangkot=10;
var angkotBeroperasi=6
var noAngkot=1;

for(noAngkot; noAngkot<=jmlangkot; noAngkot++){
    if(noAngkot <=angkotBeroperasi){
        console.log("Angkot No : " +noAngkot + "Beroperasi")
    }else if(noAngkot === 7 || noAngkot === 2){
        console.log("Angkot No : " +noAngkot + "Sibuk")
    }else{
        console.log("Angkot No : " +noAngkot + "lembur")
    }
}