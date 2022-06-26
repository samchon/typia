import { Primitive } from "../../internal/Primitive";

function predicate<T>(optimized: string, data: T): boolean {
    const parsed: T = JSON.parse(optimized);
    const expected: T = JSON.parse(JSON.stringify(data));

    return Primitive.equal_to(parsed, expected);
}

export function _test_stringify<T>(
    name: string,
    data: T,
    converter: (input: T) => string,
    predicator: (optimized: string, data: T) => boolean = predicate,
): () => void {
    return () => {
        const optimized: string = converter(data);
        if (predicator(optimized, data) === false)
            throw new Error(
                `Bug on TSON.stringify(): failed to understand the ${name} type.`,
            );
    };
}
