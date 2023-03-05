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

// Readline

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.question("maukan nama anda : ", (nama) =>{
    rl.question("masukan nomer hp anda :",(noHape)=>{
        const contac= {
            nama:nama,
            noHape:noHape
        }

        // question dan memasukan ke dalam folder
        const file = fs.readFileSync("data/contac.json", 'utf-8')
        const contact = JSON.parse(file)
    
        contact.push(contac)
        fs.writeFileSync("data/contac.json",  JSON.stringify(contact))

        console.log("Terimakasih sudah memasukan data")

        rl.close()
    })
    

})