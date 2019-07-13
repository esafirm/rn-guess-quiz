import { observable, action, runInAction } from 'mobx'
import firebase from 'react-native-firebase'

export class Level {
    name: string = ""
    questionCount: number = 0
}

export default class LevelStore {

    @observable levelList: Array<Level> = []
    @observable isLoading: Boolean = true

    @action
    fetchLevels() {
        this.isLoading = true
        firebase.firestore().collection('level').get()
            .then(levelDoc => {
                const levels: Array<any> = []
                levelDoc.forEach(doc => {
                    levels.push(doc.data() as Level)
                })

                console.log('Level:', levels)
                runInAction(() => {
                    this.levelList = levels.reverse()
                    this.isLoading = false
                })
            })
            .catch(e => {

            })
    }
}