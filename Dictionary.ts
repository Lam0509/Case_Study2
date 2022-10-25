import {Word} from "./Word";
import * as readlineSync from "readline-sync";
import {Type} from "./Type";
import {Meaning} from "./Meaning";
import {Example} from "./Example";

export class Dictionary {
    static words: Word[] = [];

    static addWord(): void {
        let name = readlineSync.question('Nhập 1 từ mới:  ');
        let pronoun = readlineSync.question('Nhập phát âm của từ đó:  ');
        let word = new Word(name, pronoun);
        let questionType, questionMeaning, questionExample;

        do {
            let nameOfType = readlineSync.question('Nhập type:  ');
            let type = new Type(nameOfType);

            do {
                let definition = readlineSync.question('Nhập nghĩa:  ');
                let meaning = new Meaning(definition);

                do {
                    let english = readlineSync.question('Nhập ví dụ tiếng anh:  ');
                    let vietnamese = readlineSync.question('Nhập ví dụ tiếng việt:  ');
                    let example = new Example(english, vietnamese);
                    meaning.examples.push(example);
                    questionExample = readlineSync.question('Bạn có muốn nhập tiếp example không?:  ')
                } while (questionExample == "Yes")

                type.meanings.push(meaning);
                questionMeaning = readlineSync.question('Bạn có muốn nhập tiếp meaning không?:  ');
            } while (questionMeaning == "Yes")

            word.types.push(type);
            questionType = readlineSync.question('Bạn có muốn nhập tiếp type không?:  ');
        } while (questionType == "Yes")

        Dictionary.words.push(word);
    }

    static deleteWord(name: string): void {
        Dictionary.words.forEach((word, index)=>{
            if (word.name === name) {
                Dictionary.words.splice(index, 1);
            }
        })
    }
}