// core modul

//file system
const fs = require("fs")

// menuliskan string ke file (synchronous)  // atau membuat folder ( di tambah data/)
// fs.writeFileSync('data/test.txt',"hello world")


//cara menampung error

// try{
//     fs.writeFileSync('data/test.txt',"hello world")
// }catch(error){
//     console.log(error)
// }


//menuliskan string ke file (asychronous)

// fs.writeFile("data/test.txt","hello world", (e)=>{
//     console.log(e)
// })



//membaca isi file (syncchronous)
// const data =fs.readFileSync("data/test.txt" , "utf-8")    // atau menggunakan utf-8 sehingga tidak membutuhkan method tostring
// console.log(data.toString())   // harus di ubah di string menggaunakan to string



//membaca isi file (asychronous)
// fs.readFile('data/test.txt','utf-8' , (err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

