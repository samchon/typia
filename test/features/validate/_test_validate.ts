import { IValidation } from "../../../src/IValidation";

export function _test_validate<T>(
    name: string,
    generator: () => T,
    validator: (input: T) => IValidation,
    spoilers?: Array<(elem: T) => string[]>,
): () => void {
    return () => {
        if (validator(generator()).success === false) {
            console.log(validator(generator()));
            throw new Error(
                `Bug on TSON.validate(): failed to understand the ${name} type.`,
            );
        }

        // for (const spoil of spoilers || []) {
        //     const elem: T = generator();
        //     const paths: string[] = spoil(elem);
        //     const { errors } = validator(elem);

        //     if (
        //         errors.length !== paths.length ||
        //         errors.every((e, i) => e.path !== paths[i]) === false
        //     )
        //         throw new Error(
        //             `Bug on TSON.validate(): failed to detect error on the ${name} type.`,
        //         );
        // }
    };
}
