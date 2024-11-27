export default class Exam {
    constructor(weight, answer) {
        this.weight = weight;
        this.answer = answer;
        this.exams = [];
    }

    add(exam) {
        this.exams.push(exam);
    }

    #calculatePoints(exam) {
        let points = 0;
        const answers = Object.values(this.answer); 
        const weights = Object.values(this.weight); 
        const questions = Object.keys(this.answer); 

        questions.forEach((key, index) => {
            if (exam[key] === answers[index]) {
                points += weights[index];
            }
        });

        return points;
    }

    avg() {
        if (!this.exams.length) return null;

        const pointsArray = this.exams.map((exam) => this.#calculatePoints(exam)); 
        const total = pointsArray.reduce((sum, value) => sum + value, 0);
        return total / pointsArray.length;
    }

    min(count = 1) {
        if (!this.exams.length) return null;

        const pointsArray = this.exams.map((exam) => this.#calculatePoints(exam));
        const pointsArrayOrder = pointsArray.sort();
        return pointsArrayOrder.slice(0, count); 
    }

    max(count = 1) {
        if (!this.exams.length) return null;

        const pointsArray = this.exams.map((exam) => this.#calculatePoints(exam));
        const pointsArrayOrder = pointsArray.sort();
        return pointsArrayOrder.slice(pointsArrayOrder.length - count, pointsArrayOrder.length); 
    }

    lt(limit) {
        if (!this.exams.length) return null;

        const pointsArray = this.exams.map((exam) => this.#calculatePoints(exam));
        return pointsArray.filter((points) => points < limit);
    }

    gt(limit) {
        if (!this.exams.length) return null;

        const pointsArray = this.exams.map((exam) => this.#calculatePoints(exam));
        return pointsArray.filter((points) => points > limit); 
    }
}
