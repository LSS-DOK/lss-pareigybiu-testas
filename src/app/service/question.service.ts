import { Injectable } from '@angular/core';

const RANKS = [
  { img: '/assets/img/1.png',  title: 'Jaunasis šaulys' },
  { img: '/assets/img/2.png',  title: 'Eilinis šaulys' },
  { img: '/assets/img/3.png',  title: 'Skyriaus jaunųjų šaulių vado pavaduotojas' },
  { img: '/assets/img/4.png',  title: 'Vyriausiasis šaulys (skyriaus vado pavaduotojas)' },
  { img: '/assets/img/5.png',  title: 'Skyriaus jaunųjų šaulių vadas' },
  { img: '/assets/img/6.png',  title: 'Skyriaus vadas (skyrininkas)' },
  { img: '/assets/img/7.png',  title: 'Būrio jaunųjų šaulių vado pavaduotojas' },
  { img: '/assets/img/8.png',  title: 'Būrio vado pavaduotojas (būrininkas, būrio specialistas, štabo specialistas)' },
  { img: '/assets/img/9.png',  title: 'Kuopos specialistas, štabo vyresnysis specialistas, rinktinės' },
  { img: '/assets/img/10.png', title: 'Jaunųjų šaulių vadas' },
  { img: '/assets/img/11.png', title: 'Būrio jaunųjų šaulių vadas' },
  { img: '/assets/img/12.png', title: 'Būrio vadas' },
  { img: '/assets/img/13.png', title: 'Kuopos jaunųjų šaulių vado pavaduotojas' },
  { img: '/assets/img/14.png', title: 'Kuopos vado pavaduotojas, štabo vyriausiasis specialistas' },
  { img: '/assets/img/15.png', title: 'Kuopos jaunųjų šaulių vadas' },
  { img: '/assets/img/16.png', title: 'Kuopos vadas, štabo skyriaus viršininkas' },
  { img: '/assets/img/17.png', title: 'Rinktinės jaunųjų šaulių vado pavaduotojas' },
  { img: '/assets/img/18.png', title: 'Rinktinės vado pavaduotojas' },
  { img: '/assets/img/19.png', title: 'Rinktinės vadas' },
  { img: '/assets/img/20.png', title: 'LŠS vado pavaduotojas - jaunųjų šaulių vadas' },
  { img: '/assets/img/21.png', title: 'LŠS vado pavaduotojas' },
  { img: '/assets/img/22.png', title: 'LŠS vadas' }
];

export interface IOption {
  title: string;
  correct?: boolean;
}

export interface IQuestion {
    img: string;
    options: IOption[];
}

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  constructor() { }

  private randInt(max: number) : number {
    return Math.floor(Math.random() * max);
  }

  private shuffle<T>(array: T[]) : T[] {
    let currentIndex = array.length;

    while (currentIndex > 0) {
      let randomIndex = this.randInt(currentIndex);
      --currentIndex;

      [array[randomIndex], array[currentIndex]] = [array[currentIndex], array[randomIndex]];
    }

    return array;
  }

  getQuestions(numOptions: number) : IQuestion[] {
    numOptions = Math.min(numOptions, RANKS.length);

    let me = this;
    let q : IQuestion[] = [];

    RANKS.forEach(function(r) {
      let optionsSet = new Set<string>();

      optionsSet.add(r.title);
      while (optionsSet.size < numOptions)
        optionsSet.add(RANKS[me.randInt(RANKS.length)].title);

      q.push({ img: r.img, options: me.shuffle([...optionsSet!].map(x => ({ title: x, ...(x===r.title && { correct: true } )}))) });
    });

    return this.shuffle(q);
  }
}
