import { StringUtil } from "./StringUtil";

export namespace NamingConvention {
    export function snake(str: string): string {
        const indexes: number[] = [];
        for (let i: number = 0; i < str.length; i++) {
            const code: number = str.charCodeAt(i);
            if (65 <= code && code <= 90) indexes.push(i);
        }
        for (let i: number = indexes.length - 1; i > 0; --i) {
            const now: number = indexes[i]!;
            const prev: number = indexes[i - 1]!;
            if (now - prev === 1) indexes.splice(i, 1);
        }
        if (indexes.length !== 0 && indexes[0] === 0) indexes.splice(0, 1);
        if (indexes.length === 0) return str.toLowerCase();

        let ret: string = "";
        for (let i: number = 0; i < indexes.length; i++) {
            const first: number = i === 0 ? 0 : indexes[i - 1]!;
            const last: number = indexes[i]!;
            ret += str.substring(first, last).toLowerCase();
            if (i !== indexes.length - 1) ret += "_";
        }
        ret += str.substring(indexes[indexes.length - 1]!).toLowerCase();
        return ret;
    }

    export function camel(str: string): string {
        str = removeSnake(str);
        if (str.length === 0) return str;
        else if (str[0] === str[0]!.toUpperCase())
            return str[0]!.toLowerCase() + str.substring(1);
        else if (
            str[0] === "_" &&
            str.length > 1 &&
            str[1] === str[1]!.toLowerCase()
        )
            return "_" + str[1]!.toUpperCase() + str.substring(2);
        else return str;
    }

    export function pascal(str: string): string {
        str = removeSnake(str);
        if (str.length === 0) return str;
        else if (str[0] === str[0]!.toLowerCase())
            return str[0]!.toUpperCase() + str.substring(1);
        else if (
            str[0] === "_" &&
            str.length > 1 &&
            str[1] === str[1]!.toLowerCase()
        )
            return "_" + str[1]!.toUpperCase() + str.substring(2);
        else return str;
    }

    const removeSnake = (str: string): string => {
        const indexes: [number, number][] = [];
        for (let i: number = 0; i < str.length; i++) {
            const ch: string = str[i]!;
            if (ch !== "_") continue;

            const last = indexes[indexes.length - 1];
            if (last === undefined) indexes.push([i, 1]);
            else if (last[0] + last[1] === i) ++last[1];
        }
        if (indexes.length === 0) return str;

        let ret: string = "";
        for (let i: number = 0; i < indexes.length; i++) {
            const [first] = indexes[i]!;
            if (i === 0 && first === 0) ret += "_";
            else {
                const line: string = str.substring(0, first);
                if (line.length)
                    ret += StringUtil.capitalize(str.substring(0, first));
            }
        }
        const last: string = str.substring(indexes[indexes.length - 1]![0]!);
        if (last.length) ret += StringUtil.capitalize(last);
        return ret;
    };
}
