class NegociacaoService {

    obterNegociacoesSemana() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/semana');
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText).map(o => new Negociacao(new Date(o.data), o.quantidade, o.valor)));
                    } else {

                        reject("Ocorreu um erro ao tentar recuperar os dados.", null);
                        throw new Error(xhr.responseText);
                    }
                }
            };
            xhr.send();
        });
    }

    obterNegociacoesAnterior() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/anterior');
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText).map(o => new Negociacao(new Date(o.data), o.quantidade, o.valor)));
                    } else {

                        reject("Ocorreu um erro ao tentar recuperar os dados.", null);
                        throw new Error(xhr.responseText);
                    }
                }
            };
            xhr.send();
        });
    }

    obterNegociacoesRetrasada() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/retrasada');
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText).map(o => new Negociacao(new Date(o.data), o.quantidade, o.valor)));
                    } else {

                        reject("Ocorreu um erro ao tentar recuperar os dados.", null);
                        throw new Error(xhr.responseText);
                    }
                }
            };
            xhr.send();
        });
    }
}