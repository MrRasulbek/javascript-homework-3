var age = +prompt("Iltimos yoshingizni kiriting: ")
if (age <= 18 && age > 0){
               console.log("Yoshsiz. O'qishingiz kerak")
               alert("Yoshsiz. O'qishingiz kerak")
}
else if (age > 18 && age <= 50){
               console.log("Ishlashingiz kerak")
               alert("Ishlashingiz kerak")
}
else if (age > 50 && age <= 59){
               console.log("Yaqinda pensiyaga chiqasiz")
               alert("Yaqinda pensiyaga chiqasiz")
}
else if (age > 59 && age <= 150){
               console.log("Pensionerga o'xshaysiz hali tirik bo'lsangiz :) ")
               alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz :) ")
}
else{
               console.log("Nimadur noto'g'ri ketib qoldi")
               alert("Nimadur noto'g'ri ketib qoldi. Tafsiyamiz 1 dan 150 gacha sonlardan foydalaning :). E'tibor uchun rahmat")
}
alert("Dasturdan foydalanganingiz uchun rahmat, ishlaringizga omad tilaymiz")
console.log("Dasturdan foydalanganingiz uchun rahmat, ishlaringizga omad tilaymiz")