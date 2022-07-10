import { TypeGuardError } from "../../../src";
import { IValidation } from "../../../src/IValidation";

export function _test_validate_for_of<T>(
    name: string,
    generator: () => T[],
    validator: (input: T) => IValidation,
    spoilers?: Array<(elem: T, index: number) => string[]>,
): () => void {
    return () => {
        for (const input of generator())
            if (validator(input).success === false)
                throw new Error(
                    `Bug on TSON.validate(): failed to understand the ${name} type.`,
                );

        for (const spoil of spoilers || [])
            generator().forEach((elem, index) => {
                const paths: string[] = spoil(elem, index);
                const { errors } = validator(elem);

                if (
                    errors.length !== paths.length ||
                    errors.every((e, i) => e.path !== paths[i]) === false
                )
                    throw new Error(
                        `Bug on TSON.validate(): failed to detect error on the ${name} type.`,
                    );
            });
    };
}
