/**LRU stands for Least Recently Used. It uses the concept of temporal locality.
In LRU we keep the recently accessed items and remove the least recently accessed Items.
*/

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = [];
  }

  getItem(item) {
    return this.cache.indexOf(item);
  }

  setItem(item) {
    const index = this.getItem(item);
    if (index !== -1) {
      this.cache.unshift(...this.cache.splice(index, 1));
      return this.cache;
    }
    if (this.cache.length === this.capacity) {
      this.cache.pop();
    }
    this.cache.unshift(item);
    return this.cache;
  }
}

/** 
Input
Items - 10,20,10,30,40,50,30,40,60,30 (Items to set)

you will receive the final output as => [30,60,40,50]
*/
