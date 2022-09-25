export namespace ArrayUtil {
    export function has<T>(array: T[], pred: (elem: T) => boolean): boolean {
        return array.some(pred);
    }

    export function add<T>(
        array: T[],
        value: T,
        pred: (x: T, y: T) => boolean = (x, y) => x === y,
    ): void {
        if (array.some((elem) => pred(elem, value))) return;
        array.push(value);
    }

    export function set<Key, T>(
        array: T[],
        value: T,
        key: (elem: T) => Key,
    ): void {
        if (array.some((elem) => key(elem) === key(value))) return;
        array.push(value);
    }

    export function take<T>(
        array: T[],
        pred: (elem: T) => boolean,
        init: () => T,
    ): T {
        const index: number = array.findIndex(pred);
        if (index !== -1) return array[index]!;

        const elem: T = init();
        array.push(elem);
        return elem;
    }

    export function repeat<T>(
        count: number,
        closure: (index: number, count: number) => T,
    ): T[] {
        return new Array(count)
            .fill("")
            .map((_, index) => closure(index, count));
    }

    export function flat<T>(matrix: T[][]): T[] {
        return ([] as T[]).concat(...matrix);
    }
}
