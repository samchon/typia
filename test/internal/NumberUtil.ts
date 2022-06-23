export namespace NumberUtil {
    export const elaborate =
        (d: number) => (func: (x: number) => number) => (value: number) =>
            +(func(+(value + `e+${d}`)) + `e-${d}`);
}
