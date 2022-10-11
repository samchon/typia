export type DynamicConstant = {
    [P in "a" | "b" | "c" | "d"]: number;
};
export namespace DynamicConstant {
    export function generate(): DynamicConstant {
        return {
            a: 1,
            b: 2,
            c: 3,
            d: 4,
        };
    }
}
