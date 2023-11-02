// 유니언 타입
(() => {
  function print(msg: string | number | boolean): void {
    if (typeof msg === "string") {
      console.log(`${msg} 글자수: ${msg.length}`);
    } else if (typeof msg === "number") {
      console.log(`${msg} +10= ${msg + 10}`);
    } else {
      console.log(`${msg}: ${msg ? "참" : "거짓"}`);
    }
  }

  print("김철수");
  print(30);
  print(false);
})();
