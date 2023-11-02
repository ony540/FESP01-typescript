(() => {
  //string
  var str: string = "hello";

  //Number
  var age: number = 30;

  //boolean
  var done: boolean = true;
  //object
  var todo: object = { title: "Typescript 공부", done: false };

  //Array
  var items: Array<string> = ["JS공부", "TS공부"];
  var todoList: string[] = ["JS 프로젝트", "ㅅTS 프로젝트"];

  //tuple
  var users: [string, number] = ["김철수", 20];

  //any
  var userName: any = "오나영";
  userName = 219;

  //null
  var nullVal: null = null;

  //undefined
  var undefinedVal: undefined;

  console.log(str, age, done, todo, items, todoList, users, userName, nullVal, undefinedVal);

  console.log(typeof str, typeof age, typeof done, typeof todo, typeof items, typeof todoList, typeof users, typeof userName, typeof nullVal, typeof undefinedVal);
})();
