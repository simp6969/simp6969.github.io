// weight (kg) / [height (m)]
// 18.5 -с доош байвал жингийн дутагдалтай
	
// 18.5 - 24.9 хооронд байвал эрүүл
	
// 24.9 - 30 хооронд байвал илүүдэл жинтэй
	
// 30 -с дээш байвал хэт таргалалттай

let weight = 53
let height = 1.79
height = height*height
let divided = weight/height
console.log(divided)

if (divided<18.5){
    console.log("jingiin dutagdaltai")
}
if(divided>18.5 & 24.9){
    console.log("eruul")
}
if(divided>30){
    console.log("iluudel jintei")
}

