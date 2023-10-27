import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'dateMask',
})
export class dateMaskPipe implements PipeTransform {
    transform(value: any): string {
        let dateFormatado = value

        if (dateFormatado && dateFormatado.length === 7) {
            const year = dateFormatado.substr(0, 4);
            const month = dateFormatado.substr(5, 2);

            return `${month}/${year}`
        }
        return dateFormatado
        // return dateFormatado.replace(/(\d{2})(\d{3})(\d{3})/, '$1$2-$3') 
    }
}