(() => {
  function user(name: string, age?: number): void {
    console.log(name, age);
  }

  user("김철수", 20);
  user("김영희"); //김영희 undefined
})();
