
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    disance(start, end) {
        try {
            if(start instanceof Point  &&  end instanceof Point && start.x !== end.x && start.y !== end.y) {
                return Math.sqrt(((start.x - end.x) ** 2) + ((start.y - end.y) ** 2)).toFixed(2); 
              }  
            throw new Error("Были переданы другие аргументы")
        }
        catch(error) {
            console.log(error.message)
        }
    }
  }
  const point = new Point();
  console.log(point.disance(new Point(2, 3), new Point(4, 5)));

  function calcRoots(a, b, c, d) {
    // матем:
    const P = Number(Math.sqrt(((a - c) ** 2) + ((b - d) ** 2)).toFixed(2));
    const x2 = "Неправильно введены точки";
  
    if (P < 0) {
      return [x2];
    }
  
    if (P === 0) {
      return [x2];
    }
    if (P > 0) {
      let x1 = P
      return [x1];
    }
  }
  
  // <!-- скрипт со спецификацией (describe, it...) -->
  describe("calcRoots", function() {
    it("тест1", function() {
      assert.deepEqual(calcRoots(2,3,4,5), [2.83]);
    });
    it("тест2", function() {
      assert.deepEqual(calcRoots(5,7,8,9), [3.61]);
    });
    it("тест3", function() {
      assert.deepEqual(calcRoots(6,7,11,24), [17.72]);
    });
    it("тест4", function() {
      assert.deepEqual(calcRoots(4,2,2,4), [2.83]);
    });
    it("тест5", function() {
      assert.deepEqual(calcRoots(0,0,0,0), [0.00]);
    });
  });
