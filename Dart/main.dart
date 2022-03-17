class Produto {
    String _nome;
    double _preco;
    String get nome => _nome;
    double get preco => _preco;

    // construtor
    Produto(this._nome, this._preco) { }

    oferta() {
        return "$nome por apenas $preco Reais.";
    }
}

void main() {
    // tipos de variaveis
    int n1 = 3;
    String text = "Hello World!";
    bool status = true;
    double price = 3.99;
    dynamic any = "any";

    // lista implícita --> ["..."]
    var nomes = ["Leo", "Ana", "Patrick"];
    nomes.add("Lucky");
    nomes.insert(0, "Noel");

    // lista explícita --> []
    List<String> alunos = [];
    alunos.add("Leo");

    // conjunto implícito --> {...}
    var conjunto = {1, 2, 3, 4, 5};

    // conjunto explícito --> {}
    Set<String> linguagens = Set();
    linguagens.add("Java");
    linguagens.add("Python");

    // mapas --> {chave/valor}
    Map<String, double> notas = {"Maria":8.9, "Lucky":5.5, "Jonny":9};

    // função
    double somar(double x, double y) {
        return x + y;
    };

    // função anônima
    Function(double, double) multiplicar = (x, y) => x * y;;

    // classe
    var bola = new Produto("Bola", 10);


    print("int n1 = $n1");
    print("String text = $text");
    print("bool status = $status");
    print("double price = $price");
    print("dynamic any = $any");
    print("lista implícita = $nomes");
    print("lista explícita = $alunos");
    print("conjunto implícito = ${conjunto.length} elementos");
    print("conjunto explícito = ${linguagens.length} elementos");
    for (var c in notas.entries) {
        print("Map<String, double> notas: ${c.key} tirou ${c.value} na prova.");
    }
    print(somar(4, 4));
    print(multiplicar(5, 5));
    print(bola.oferta());
    print("preço da ${bola.nome} é de ${bola.preco} Reais.");
}