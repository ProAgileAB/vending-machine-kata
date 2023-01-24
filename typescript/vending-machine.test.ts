import {describe, it, expect} from 'vitest'
import VendingMachine from "./vending-machine";
import VendingMachinePrinter from "./vending-machine-printer";

describe("Vending Machine", () => {
    it("foo", () => {
        let vendingMachine = new VendingMachine()
        let printer = new VendingMachinePrinter(vendingMachine)
        expect(printer.print()).toMatchSnapshot()
    })
})
