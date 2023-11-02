// 클래스의 타입 지정에 인터페이스 사용
(() => {
  interface Score {
    kor: number;
    eng: number;
    sum(): number;
    avg(): number;
  }

  class HighSchool implements Score {
    /**'HighSchool' 클래스가 'Score' 인터페이스를 잘못 구현합니다.
  'HighSchool' 형식에 'Score' 형식의 kor, eng 속성이 없습니다. */

    kor: number;
    eng: number;
    
    constructor(kor: number, eng: number) {
      this.kor = kor;
      this.eng = eng;
    }

    sum() {
      return this.kor + this.eng;
    }
    avg() {
      return this.sum() / 2;
    }
  }

  const kim = new HighSchool(100, 50);
  console.log(kim.sum(), kim.avg());
})();
