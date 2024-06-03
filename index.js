class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(item) {
        this.length = this.items.push(item);
        this.items.sort((a, b) => a - b);
    }

    get(pos) {
        if (pos >= this.length) {
            throw new Error("OutOfBounds");
        }
        return this.items[pos];
    }

    max() {
        if (this.length === 0) {
            throw new Error("Empty SortedList");
        }
        return Math.max(...this.items);
    }

    min() {
        if (this.length === 0) {
            throw new Error("EmptySortedList");
        }
        return Math.min(...this.items);
    }

    sum() {
        return this.items.reduce((acc, curr) => acc + curr, 0);
    }

    avg() {
        if (this.length === 0) {
            throw new Error("EmptySortedList");
        }
        return this.sum() / this.length;
    }
}

module.exports = SortedList;
