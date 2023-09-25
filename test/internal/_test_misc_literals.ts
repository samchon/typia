export const _test_misc_literals =
    (name: string) =>
    <T>(factory: () => readonly T[]) =>
    (expected: readonly T[]) =>
    () => {
        const result: readonly T[] = factory();
        if (
            result.length !== expected.length ||
            result.some((elem, i) => elem !== expected[i])
        )
            throw new Error(
                `Bug on typia.literals() for ${name}: array is different than expected`,
            );
    };
