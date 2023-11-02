// 타입 별칭
// ex01-05.ts 복사
(() => {
  type Message = string | number;
  
  function log(msg: string | number): void {
    console.log(msg);
  }

  log("김철수");
  log(30);

  var msg1: Message = "world";
  var msg2: Message = 200;
  msg1 = 300;
  // msg2 = true

  log(msg1);
  log(msg2);
})();
