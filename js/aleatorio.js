const nomes = ["Ester", "Duda", "Lucca", "Pietro", "letícia", "mick", "Sofia", "Enzo Gabriel", "Bunda", "Haru", "Deide Costa", "Amanda"];
export function aleatorio (Lista){
    const posicao = Math.floor(Math.random()* Lista.length);
    return Lista[posicao];
}

export const nome = aleatorio(nomes);