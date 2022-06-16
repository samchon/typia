import { Primitive } from "../../internal/Primitive";

export function _test_stringify<T>(
    name: string,
    data: T,
    converter: (input: T) => string,
): () => void {
    return () => {
        const optimized: string = converter(data);
        const parsed: T = JSON.parse(optimized);
        const expected: T = JSON.parse(JSON.stringify(data));

        if (Primitive.equal_to(parsed, expected) === false) {
            console.log(parsed);
            console.log(expected);
            throw new Error(
                `Bug on TSON.stringify(): failed to understand the ${name} type.`,
            );
        }
    };
}
