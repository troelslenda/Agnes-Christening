import { Component } from '@angular/core';
import { WishService} from './wish.service';
import { Wish } from './wish';

@Component({
    selector: 'wishes-section',
    providers: [WishService],

    templateUrl: "src/app/wishes/wishes.html",
})
export class WishesComponent {
    private wishes:Wish[];

    constructor(private _wishService:WishService) {
        this._wishService.getWishes().subscribe(wishes => {this.wishes = wishes});
    }
    /*wishes = [
        new Wish('Bubbles', 'NEEDS-ACTION', '20161201T213217Z', '20161201T213222Z'),
        new Wish('Tripp Trapp Baby Set', 'NEEDS-ACTION', '20161201T213217Z', '20161201T213222Z'),
        new Wish('Billedramme', 'NEEDS-ACTION', '20161201T213217Z', '20161201T213222Z'),
    ];*/
}
