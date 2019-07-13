import { observable, action, runInAction } from 'mobx'
import firebase from 'react-native-firebase'

class Quiz {
    questionImage = ""
    answer = []

    constructor(questionImage: string) {
        this.questionImage = questionImage
    }
}

export default class QuizStore {
    @observable quizList: Quiz[] = [
        new Quiz("a"),
        new Quiz("b"),
        new Quiz("c"),
        new Quiz("d"),
    ]

    sampleText: String = "This is a text"
}