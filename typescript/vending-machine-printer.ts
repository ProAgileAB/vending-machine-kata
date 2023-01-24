import VendingMachine from './vending-machine'

class VendingMachinePrinter {
    columns: number;
    machine: VendingMachine;

    constructor(machine: VendingMachine) {
        this.columns = 60
        this.machine = machine
    }

    print() {
        let text = "VendingMachine\n"
        // TODO: finish this
        return text
    }

    format_line_with_whitespace(name, value) {
        /*
        Convenience function that lays out a name and a value at either ends of a fixed-width line.
        E.g if you call it with name="Foo" value="Bar", 9 columns, it will return
        'Foo   Bar'
        */
        let whitespace_size = this.columns - name.length - `${value}`.length;
        let whitespace = "";
        for (let i = 0; i < whitespace_size; i++) {
            whitespace += " ";
        }
        return `${name}${whitespace}${value}\n`;
    }
}

export default VendingMachinePrinter