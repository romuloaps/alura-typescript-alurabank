type Token = string | number;

function processaToken(token: Token) {
    let tokenProcessado = typeof(token) === "number" ? token.toFixed() : token.toString();
    return tokenProcessado.replace(/2/g, "X");
}

const tokenNumber = processaToken(1234);
const tokenString = processaToken("1234");