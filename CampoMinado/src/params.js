import { Dimensions} from "react-native"

const params = {
    blockSize: 30, // Proporção de cada bloco
    borderSize: 5, // Tamanho da borda
    fontSize: 15, // Tamanho da fonte
    headerRatios: 0.15, // Proporção do abeçalho correspondente a 15%
    difficultLevel: 0.1, // Nível de dificuldade
    getColumnsAmount(){ // Método para pegar a largura e dividir pela quantidade de blocos dinâmicamente
        const width = Dimensions.get("window").width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount(){ // Método para pegar a altura e dividir pela quantidade de blocos dinâmicamente
        const totalHeight = Dimensions.get("window").height
        const boardHeight = totalHeight * (1 - this.headerRatios)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params;