import { Primitive } from "../../internal/Primitive";

export function _test_stringify<T>(
    name: string,
    generator: () => T,
    converter: (input: T) => string,
): () => void {
    return () => {
        const data: T = generator();
        const optimized: string = converter(data);

        if (predicate(data, optimized) === false) {
            throw new Error(
                `Bug on TSON.stringify(): failed to understand the ${name} type.`,
            );
        }
    };
}

function predicate<T>(data: any, optimized: string): boolean {
    // SPECIAL CASE, UNDEFINED
    if (
        optimized === undefined &&
        (data === undefined ||
            typeof data === "function" ||
            (data.toJSON && data.toJSON() === undefined))
    )
        return true;

    // DO COMPARE
    const parsed: T = JSON.parse(optimized);
    const expected: T = JSON.parse(JSON.stringify(data));

    return Primitive.equal_to(parsed, expected);
}
