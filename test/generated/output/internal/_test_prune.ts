import typia from "typia";

export function _test_prune<T extends object>(name: string, generator: () => T, pruner: (input: T) => void): () => void {
    return () => {
        const input: T = generator();
        // SPOIL OBJECTS
        iterate((obj: any) => new Array(10)
            .fill("")
            .forEach((_, i) => (obj[`__non_regular_type__${i}`] = "vulnerable")))(input);
        // DO VALIDATE
        pruner(input);
        if (pruner.toString().indexOf("RegExp(/(.*)/).test") === -1)
            iterate((obj: any) => {
                if (Object.keys(obj).some((key) => key.indexOf("__non_regular_type__") === 0))
                    throw new Error(`Bug on typia.prune(): failed to prune the ${name} type.`);
            })(input);
    };
}
const iterate = (closure: (obj: any) => void) => (input: any): void => {
    if (Array.isArray(input))
        return iterate_array(closure)(input);
    else if (input !== null &&
        typeof input === "object" &&
        typeof input.valueOf() === "object")
        return iterate_object(closure)(input);
};
const iterate_object = (closure: (obj: any) => void) => (input: any): void => {
    closure(input);
    for (const value of Object.values(input))
        iterate(closure)(value);
};
const iterate_array = (closure: (obj: any) => void) => (input: any): void => input.forEach((elem: any) => iterate(closure)(elem));
