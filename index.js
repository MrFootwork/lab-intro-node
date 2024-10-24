class SortedList {
	constructor() {
		this.items = [];
		this.length = this.items.length;
	}

	add(item) {
		this.items.push(item);
		this.items.sort((a, b) => a - b);
		this.length = this.items.length;
	}

	get(pos) {
		if (this.items[pos] === undefined) throw new Error('OutOfBounds');
		return this.items[pos];
	}

	max() {
		if (!this.items.length) throw new Error('EmptySortedList');
		return Math.max(...this.items);
	}

	min() {}

	sum() {}

	avg() {}
}

module.exports = SortedList;
