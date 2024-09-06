// Dados dos atletas
const athletes = {
    "Pelé": {
        esporte: "Futebol",
        conquistas: "3 Copas do Mundo (1958, 1962, 1970)",
        descricao: "Considerado um dos maiores jogadores de futebol de todos os tempos, Pelé marcou mais de 1.000 gols em sua carreira."
    },
    "Oscar Schmidt": {
        esporte: "Basquete",
        conquistas: "5 participações em Olimpíadas",
        descricao: "Um dos maiores jogadores de basquete do Brasil, conhecido por sua habilidade no arremesso de longa distância."
    },
    "Marta": {
        esporte: "Futebol",
        conquistas: "6 vezes melhor jogadora do mundo pela FIFA",
        descricao: "Marta é considerada uma das maiores jogadoras de futebol feminino de todos os tempos."
    },
    "Rayssa Leal": {
        esporte: "Skate",
        conquistas: "Medalha de prata nas Olimpíadas de Tóquio 2020",
        descricao: "Conhecida como 'Fadinha', Rayssa Leal é uma skatista brasileira que fez história ao conquistar a medalha de prata no skate street nas Olimpíadas de Tóquio 2020, aos 13 anos."
    },
    "Beatriz Souza": {
        esporte: "Judô",
        conquistas: "Medalha de bronze nos Jogos Olímpicos de Tóquio 2020",
        descricao: "Beatriz Souza é uma judoca brasileira que compete na categoria acima de 78kg e conquistou a medalha de bronze nas Olimpíadas de Tóquio 2020."
    }
};

function searchAthlete() {
    const input = document.getElementById('searchInput').value.trim();
    const athleteInfo = document.getElementById('athleteInfo');
    const resultMessage = document.getElementById('resultMessage');

    if (input in athletes) {
        const athlete = athletes[input];

        athleteInfo.innerHTML = `
            <h2>${input}</h2>
            <p><strong>Esporte:</strong> ${athlete.esporte}</p>
            <p><strong>Conquistas:</strong> ${athlete.conquistas}</p>
            <p><strong>Descrição:</strong> ${athlete.descricao}</p>
        `;

        athleteInfo.style.display = 'block';
        resultMessage.style.display = 'none';
    } else {
        athleteInfo.style.display = 'none';
        resultMessage.style.display = 'block';
    }
}
