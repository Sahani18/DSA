const stack = function () {
    this.count = 0;
    this.storage = [];
  
    this.push = function (value) {
      this.storage[this.count] = value;
      this.count++;
    };
  
    this.peek = function () {
      return this.storage[this.count-1];
    };
  
    this.size = function () {
      return this.count;
    };
  
    this.pop = function () {
      if (this.count === 0) {
        return undefined;
      }
      let result = this.storage[this.count - 1];
      delete this.storage[this.count - 1];
      this.count--;
      return result;
    };
    
  };
  
  const data = new stack();
  data.push(5);
  data.push(6);
  data.push(8);
  console.log(data.peek());
  console.log(data.size());
  data.push(2);
  console.log(data.peek());
  console.log(data.size());
  console.log(data.pop());
  console.log(data.peek());
  
  