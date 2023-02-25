class GuessingGame {

    minValue;
    maxValue;


    constructor() {

    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;

    }

    guess() {
        //console.log(Math.round(this.maxValue / 2 + this.minValue / 2))
        return Math.round(this.maxValue / 2 + this.minValue / 2)
        //return Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue
    }

    lower() {
        this.maxValue = Math.round(this.maxValue / 2 + this.minValue / 2)
        //console.log(Math.round(this.maxValue = this.maxValue / 2))

    }

    greater() {
        this.minValue = Math.round(this.maxValue / 2 + this.minValue / 2)
        //console.log(Math.round(this.maxValue / 2 + this.minValue / 2))
    }

}

module.exports = GuessingGame;
