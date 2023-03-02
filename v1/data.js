var jumlahAngkot = 10;
var angkotBeroperasi=6;
var noAngkot=1;

for(noAngkot; noAngkot<jumlahAngkot; noAngkot++){
    if(noAngkot <=angkotBeroperasi && noAngkot !==2 && noAngkot !==3){
        console.log("Angkot No :" + noAngkot + "Beroperasi dengan baik")
    }else if(noAngkot ===8 || noAngkot ===2 || noAngkot ===3){
        console.log("Angkot No : "+ noAngkot + "Rusak")
    }else{
        console.log("Angkot No :" + noAngkot + "Lembur")
    }
}