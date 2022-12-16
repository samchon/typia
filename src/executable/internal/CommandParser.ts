export namespace CommandParser {
    export function parse(argList: string[]): Record<string, string> {
        const output: Record<string, string> = {};
        argList.forEach((arg, i) => {
            if (arg.startsWith("--") === false) return;

            const key = arg.slice(2);
            const value: string | undefined = argList[i + 1];
            if (value === undefined || value.startsWith("--")) return;

            output[key] = value;
        });
        return output;
    }
}
