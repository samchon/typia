export function _test_misc_literals<T>(
    name: string,
    generator: () => T,
    validator: (input: T) => boolean,
): () => void {
    return () => {
        if (validator(generator()) === false)
            throw new Error(
                `Bug on typia.misc.literals() for ${name}: array is different than expected`,
            );
    };
}
