export enum mainMenu {
    Login = 1,
    Register = 2,
    Exit = 0
}

export enum menuForAdmin {
    addWord = 1,
    deleteWord = 2,
    editWord = 3,
    logOff = 0,
}

export enum menuForUser {
    showDictionary = 1,
    searchWord = 2,
    logOff = 0,
}

export enum editWord {
    changeName = 1,
    changePronoun = 2,
    changeTypes = 3,
    changeSyns = 4,
    exit = 0
}

export enum editSyn {
    addSyn = 1,
    deleteSyn = 2,
    exit = 0
}

export enum editTypes {
    addType = 1,
    deleteType = 2,
    editOneType = 3,
    exit = 0
}

export enum editOneType {
    changeName = 1,
    editMeanings = 2,
    exit = 0
}

export enum editMeanings {
    addMeaning = 1,
    deleteMeaning = 2,
    editOneMeaning = 3,
    exit = 0
}

export enum editOneMeaning {
    changeDefinition = 1,
    editExamples = 2,
    exit = 0
}

export enum editExamples {
    addExample = 1,
    deleteExample = 2,
    exit = 0
}