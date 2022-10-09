class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  console.log(distance(new Point(2, 3), new Point(4, 5)));

  function distance(start, end) {
      if (start instanceof Point  &&  end instanceof Point && start.x !== end.x && start.y !== end.y) {
        return Number(Math.sqrt(((start.x - end.x) ** 2) + ((start.y - end.y) ** 2)).toFixed(2)); 
      } else {
        throw new Error("Были переданы другие аргументы");
      }; 
  }

  // <!-- скрипт со спецификацией (describe, it...) -->
  describe("Функция distance", function() {
    it("возвращает 2.83 если start.x = 2, end.x = 3, strat.y = 4, end.y = 5", function() {
      assert.equal(distance(new Point(2, 3), new Point(4, 5)), 2.83);
    });
    it("выбрасывает ошибку если 1 аргумент не экземпляр класса Point", function() {
      assert.throws(() => {distance({x: 2, y: 3}, new Point(3, 4))});
    });
    it("выбрасывает ошибку если 2 аргумент не экземпляр класса Point", function() {
      assert.throws(() => { distance(new Point(2, 3), {x: 4, y: 5}) });
    });
    it("выбрасывает ошибку когда была использовалась один и тот же start.х и end.x", function() {
      assert.throws(() => {distance(new Point(2, 3), new Point(2, 5))});
    });
    it("выбрасывает ошибку когда была использовалась один и тот же start.y и end.y", function() {
      assert.throws(() => {distance(new Point(1, 3), new Point(2, 3))});
    });
  });
