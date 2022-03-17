export default class Produto {
    constructor(private _nome:string, private _preco:number) { }

    public get nome():string { return this._nome; }
    public get preco():number { return this._preco; }

    oferta() {
        return `${this.nome} por apenas ${this.preco} Reais.`;
    }
}