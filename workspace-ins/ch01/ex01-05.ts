// 유니언 타입
(() => {
  function log(msg: string | number): void {
    console.log(msg);
  }

  log("김철수");
  log(30);

  var msg1: string | number = "world";
  var msg2: number | string = 200;
  msg1 = 300;
  // msg2 = true

  log(msg1);
  log(msg2);
})();
