import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], searchTerm: string, property: string): any[] {
        if (!items || !searchTerm || !property) {
            return items;
        }

        searchTerm = searchTerm.toLowerCase();

        return items.filter(item => {
            // Utilisez la propriété spécifiée pour effectuer la recherche
            const value = item[property].toLowerCase();
            return value.includes(searchTerm);
        });
    }
}
