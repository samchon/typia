export function _test_literals<T>(
    name: string,
    generator: () => readonly T[],
    expected: readonly T[],
): () => void {
    return () => {
        const result: readonly T[] = generator();
        if (
            result.length !== expected.length ||
            result.some((elem, i) => elem !== expected[i])
        )
            throw new Error(
                `Bug on typia.literals() for ${name}: array is different than expected`,
            );
    };
}
