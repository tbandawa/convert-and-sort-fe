import { Injectable } from '@angular/core';
import { Adapter } from "./adapter";
import { Subject, Observable } from 'rxjs';

export class Word {
    constructor(public word: string[]) { }
}

export class ErrorResponse {
    constructor(public message: string) { }
}

@Injectable({
    providedIn: "root"
})
export class CurrentWord {

    private newWord = new Subject<Word>()

    setWord(word: Word) {
        this.newWord.next(word)
    }

    getWord(): Observable<Word> {
        return this.newWord.asObservable()
    }
}

@Injectable({
    providedIn: "root"
})
export class WordAdapter implements Adapter<Word> {
    adapt(item: any): Word {
        return new Word(item.word)
    }
}