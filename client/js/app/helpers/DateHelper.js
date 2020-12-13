class DateHelper {

    constructor() {
        throw new Error('DateHelper não pode ser instanciada.');
    }

    static dateToText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    static textToDate(text) {

        if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) throw new Error('Formato de string inválido. (Formato aceito: yyyy-mm-dd)');

        return new Date(...text.split('-').map((valor, index) => valor - index % 2));
    }
}