//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
// รูปแบบ: เงื่อนไข ? ทำเมื่อจริง : ทำเมื่อเท็จ
lightBulbStatus === "On" // เช็คว่าสถานะเป็น "On" หรือไม่
  ? console.log("Light bulb is On.") // ถ้าใช่ → แสดงข้อความนี้
  : lightBulbStatus === "Off" // ถ้าไม่ใช่ → เช็คต่อว่าเป็น "Off" หรือไม่
    ? console.log("Light bulb is Off.") // ถ้าใช่ → แสดงข้อความนี้
    : console.log("Please choose the correct input (On/Off)"); // ถ้าไม่ใช่ทั้งคู่ → แสดงข้อความแจ้งเตือน