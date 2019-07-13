import { observable, action, runInAction, configure } from 'mobx'
import firebase from 'react-native-firebase'
import { DocumentReference } from 'react-native-firebase/firestore';

configure({ enforceActions: "observed" })

export class Level {
    name: string = ""
    questionCount: number = 0
    questions: Array<Quiz> = []
}

export class Quiz {
    questionImage = ""
    answers = []

    constructor(questionImage: string) {
        this.questionImage = questionImage
    }
}

export default class LevelStore {

    @observable levelList: Array<Level> = []
    @observable isLoading: Boolean = true

    @action
    setLevel(isLoading: boolean, levels: Array<Level> = []) {
        this.levelList = levels
        this.isLoading = isLoading
    }

    async fetchLevels() {
        this.setLevel(true)
        const levels = await this.getLevels()
        console.log('levels', levels)
        this.setLevel(false, observable.array(levels))
    }

    async getLevels(): Promise<Array<Level>> {
        const levelsDoc = await firebase.firestore().collection('level').get()
        const levels: Array<Level> = []
        const docRefs: Array<DocumentReference> = []
        levelsDoc.forEach(doc => {
            const currentLevel = doc.data() as Level
            levels.push(currentLevel)

            docRefs.push(doc.ref)
        })

        const questionsPromises = docRefs.map(ref => this.fetchQuestions(ref))
        const questions = await Promise.all(questionsPromises)

        return levels.map((v: Level, index: number) => ({
            ...v,
            questions: questions[index]
        }))
    }

    async fetchQuestions(doc: DocumentReference): Promise<Array<Quiz>> {
        const questionsDoc = await doc.collection('questions').get()
        const questions: Array<Quiz> = []
        questionsDoc.forEach(doc => {
            questions.push(doc.data() as Quiz)
        })
        return questions
    }
}