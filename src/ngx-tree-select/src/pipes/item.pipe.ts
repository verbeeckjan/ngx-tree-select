import { Pipe, PipeTransform } from '@angular/core';
import { SelectableItem } from '../models/selectable-item';

@Pipe({ name: 'itemPipe' })
export class ItemPipe implements PipeTransform {
    public transform(value: SelectableItem[], arg: string) {
        // ES6 array destructuring
        return value.filter((item) => item.matchFilter);
    }
}
