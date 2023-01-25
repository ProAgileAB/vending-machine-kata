import {describe, it, expect} from 'vitest'
import VendingMachine from "./vending-machine";
import VendingMachinePrinter from "./vending-machine-printer";

enum Coin {
    Penny= 1,
    Nickel = 5,
    Dime = 10,
    Quarter = 25
}

describe("Vending Machine assert tests version", () => {

    // Hello there!
    // 1. One of the unit tests are failing because of a bug. Fix the bug.
    // 2. Add one approval test for each unit test, rewriting them to approval style.
    //    The PRINTER in VendingMachinePrinter is incomplete, so you will have to extend
    //    it.
    // 3. How readable can you make the text representation of the VendingMachine state?
    //    Try to really improve the print-out from the PRINTER making is super clear!

    it("initial state", () => {
        const machine = new VendingMachine();
        expect(machine.balance).toEqual(0)
        expect(machine.coins).toEqual([])
        expect(machine.display).toEqual("INSERT COIN")
    })

    it("inserting one nickel", () => {
        const machine = new VendingMachine();
        expect(machine.display === "INSERT COIN")

        machine.insert_coin(Coin.Nickel)

        expect(machine.balance).toEqual(5)
        expect(machine.coins).toEqual([5])
        expect(machine.display).toEqual("5")
    })

    it("inserting two nickels", () => {
        const machine = new VendingMachine();

        machine.insert_coin(Coin.Nickel)
        machine.insert_coin(Coin.Nickel)

        expect(machine.balance).toEqual(10)
        expect(machine.coins).toEqual([5, 5])
        expect(machine.display).toEqual("10")
    })

    it("inserting some random coins", () => {
        const machine = new VendingMachine();

        machine.insert_coin(Coin.Nickel)
        machine.insert_coin(Coin.Dime)
        machine.insert_coin(Coin.Quarter)

        expect(machine.balance).toEqual(40)
        expect(machine.coins).toEqual([5, 10, 25])
        expect(machine.display).toEqual("40")
    })

    it("inserting a penny", () => {
        const machine = new VendingMachine();

        machine.insert_coin(Coin.Penny)

        expect(machine.balance).toEqual(1)
        expect(machine.coins).toEqual([1])
        expect(machine.display).toEqual("1")
    })

})


describe("Vending Machine approval test version", () => {
    it("stub approval test", () => {
        let vendingMachine = new VendingMachine()
        let printer = new VendingMachinePrinter(vendingMachine)
        expect(printer.print()).toMatchSnapshot()
    })
})


