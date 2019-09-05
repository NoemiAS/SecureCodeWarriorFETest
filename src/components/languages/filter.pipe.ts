import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, searchValue): any {
        return !searchValue ? value : value.filter((v) => v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    }
}
