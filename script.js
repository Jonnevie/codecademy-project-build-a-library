class media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    toggleCheckOutStatus(){
       this.isCheckedOut = !this.isCheckedOut
    }

    set isCheckedOut(value) {
        this._isCheckedOut = value;
    }

    getAverageRating() {
        const averageRating =  this.ratings.reduce ((acc, rating) => 
        acc + rating); 
            return averageRating / this.ratings.length
        }   
    

    addRating(value) {
        this.ratings.push(value);
    }

}

class book extends media {
    constructor(author, pages, title) {
        super(title);
        this._pages = pages;
        this._author = author;
    }

    get pages() {
        return this._pages;
    }

    get author() {
        return this._author;
    }
}

class movie extends media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }

    get runTime() {
        return this._runtime;
    }

}

const historyOfEverything = new book('Bill Bryson', 544, 'A Short History of Nearly Everything');

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating());

const speed = new movie ('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());