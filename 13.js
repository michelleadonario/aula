function tabuada(n){
    for (var i = 1; i<=10; i++){
        var linha = n + "*" +i+ "=" +n *i;
        console.log(linha);
    }
}
for (var i =1; i <= 2; i++){
    tabuada(i);
    console.log("");
}