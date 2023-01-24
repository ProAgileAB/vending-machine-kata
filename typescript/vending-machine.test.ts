import {describe, it, expect} from 'vitest'
import VendingMachine from "./vending-machine";
import VendingMachinePrinter from "./vending-machine-printer";

const coins = {"penny": 1,
    "nickel": 5,
    "dime": 10,
    "quarter": 25}

describe("Vending Machine", () => {
    it("foo", () => {
        let vendingMachine = new VendingMachine()
        let printer = new VendingMachinePrinter(vendingMachine)
        expect(printer.print()).toMatchSnapshot()
    })

    it("accept coins", () => {
        const machine = new VendingMachine();
        expect(machine.display === "INSERT COIN")

        machine.insert_coin(coins["nickel"])

        expect(machine.balance).toEqual(5)
        expect(machine.coins).toEqual([5])
        expect(machine.display).toEqual("5")
    })
})

