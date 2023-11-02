// 인터섹션 타입
(() => {
  function getCount(count: number): string {
    return "Count" + count;
  }

  getCount(10);
  // 문자열 넣으면 오류 getCount("20");

  
})();
