class VendingMachine {
    display: string;
    coins: number[];
    returns: number[];
    balance: number;
    accepted_coins: number[];

    constructor() {
        this.display = "";
        this.coins = [];
        this.returns = [];
        this.balance = 0;
        this.accepted_coins = [5, 10, 25];
        this._display_balance();
    }

    _display_balance() {
        if (this.balance) {
            this.display = `${this.balance}`;
        } else {
            this.display = "INSERT COIN";
        }
    }

    insert_coin(value: number) {
        if (this.accepted_coins.indexOf(value) >= 0) {
            this.coins.push(value);
            this.balance += value;
            this._display_balance();
        } else {
            this.returns.push(value);
        }
    }
}

export default VendingMachine

