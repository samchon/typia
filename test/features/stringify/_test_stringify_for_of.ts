import { Primitive } from "../../internal/Primitive";

function predicate<T>(optimized: string, data: T): boolean {
    const parsed: T = JSON.parse(optimized);
    const expected: T = JSON.parse(JSON.stringify(data));

    return Primitive.equal_to(parsed, expected);
}

export function _test_stringify_for_of<T>(
    name: string,
    data: T[],
    converter: (input: T) => string,
    predicator: (optimized: string, data: T) => boolean = predicate,
): () => void {
    return () => {
        for (const elem of data) {
            const optimized: string = converter(elem);
            if (predicator(optimized, elem) === false)
                throw new Error(
                    `Bug on TSON.stringify(): failed to understand the ${name} type.`,
                );
        }
    };
}
