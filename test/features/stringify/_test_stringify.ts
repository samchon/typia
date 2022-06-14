export function _test_stringify<T>(
    name: string,
    data: T,
    converter: (input: T) => string,
): () => void {
    return () => {
        const json: string = converter(data);
        const expected: string = JSON.stringify(data);

        if (json !== expected)
            throw new Error(
                `Bug on TSON.stringify(): failed to understand the ${name} type.`,
            );
    };
}
