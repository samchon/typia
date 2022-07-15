import { IValidation } from "../../../src/IValidation";

export function _test_validate_for_of<T>(
    name: string,
    generator: () => T[],
    validator: (input: T) => IValidation,
    spoilers?: Array<(elem: T, index: number) => string[]>,
): () => void {
    return () => {
        for (const input of generator())
            if (validator(input).success === false) {
                console.log(validator(input));
                throw new Error(
                    `Bug on TSON.validate(): failed to understand the ${name} type.`,
                );
            }

        const wrong: ISpoiled[] = [];
        for (const spoil of spoilers || [])
            generator().forEach((elem, index) => {
                const expected: string[] = spoil(elem, index);
                const { errors } = validator(elem);

                expected.sort();
                errors.sort((x, y) => (x.path < y.path ? -1 : 1));

                if (
                    errors.length !== expected.length ||
                    errors.every((e, i) => e.path === expected[i]) === false
                )
                    wrong.push({
                        expected,
                        solution: errors.map((e) => e.path),
                    });
            });
        if (wrong.length !== 0) {
            console.log(wrong);
            throw new Error(
                `Bug on TSON.validate(): failed to detect error on the ${name} type.`,
            );
        }
    };
}

interface ISpoiled {
    expected: string[];
    solution: string[];
}
