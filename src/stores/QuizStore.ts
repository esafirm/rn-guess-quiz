import { observable } from 'mobx'

class Quiz {
    question = ""
    answer = ""
}

export default class QuizStore {
    @observable quizList: Quiz[] = [
        new Quiz(),
        new Quiz(),
        new Quiz(),
        new Quiz(),
    ]

    sampleText: String = "This is a text"
}