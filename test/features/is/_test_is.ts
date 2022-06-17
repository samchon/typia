import { TypeGuardError } from "../../../src";

export function _test_is<T, U extends T>(
    name: string,
    generator: () => T,
    validator: (input: T) => boolean,
    spoilers?: Array<(elem: T) => void>,
): () => void {
    return () => {
        if (validator(generator()) === false)
            throw new Error(
                `Bug on TSON.is(): failed to understand the ${name} type.`,
            );

        for (const spoil of spoilers || []) {
            const elem: T = generator();
            spoil(elem);

            if (validator(elem) === false)
                throw new Error(
                    `Bug on TSON.is(): failed to detect error on the ${name} type.`,
                );
        }
    };
}
