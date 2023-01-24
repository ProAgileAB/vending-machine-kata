import {describe, it, expect} from 'vitest'
import VendingMachine from "./vending-machine";
import VendingMachinePrinter from "./vending-machine-printer";

const coins = {
    "penny": 1,
    "nickel": 5,
    "dime": 10,
    "quarter": 25
}

describe("Vending Machine", () => {

    // Task: rewrite the assert based tests to approval (snapshot) based tests!
    // Hint: you will have to extend the VendingMachinePrinter while doing this.

    it("accept coins", () => {
        const machine = new VendingMachine();
        expect(machine.display === "INSERT COIN")

        machine.insert_coin(coins["nickel"])

        expect(machine.balance).toEqual(5)
        expect(machine.coins).toEqual([5])
        expect(machine.display).toEqual("5")
    })

    it("inserting one nickel", () => {
        let vendingMachine = new VendingMachine()
        let printer = new VendingMachinePrinter(vendingMachine)
        expect(printer.print()).toMatchSnapshot()
    })

})

