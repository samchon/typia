import { Spoiler } from "../helpers/Spoiler";

export function _test_misc_isPrune<T>(
    name: string,
    generator: () => T,
    pruner: (input: T) => boolean,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        const input: T = generator();

        // SPOIL OBJECTS
        iterate((obj: any) =>
            new Array(10)
                .fill("")
                .forEach(
                    (_, i) => (obj[`__non_regular_type__${i}`] = "vulnerable"),
                ),
        )(input);

        // DO VALIDATE
        if (pruner(input) === false)
            throw new Error(
                `Bug on typia.misc.isPrune(): failed to understand the ${name} type.`,
            );
        else if (pruner.toString().indexOf("RegExp(/(.*)/).test") === -1)
            iterate((obj: any) => {
                if (
                    Object.keys(obj).some(
                        (key) => key.indexOf("__non_regular_type__") === 0,
                    )
                )
                    throw new Error(
                        `Bug on typia.misc.isPrune(): failed to prune the ${name} type.`,
                    );
            })(input);

        // SPOIL
        for (const spoil of spoilers ?? []) {
            const elem: T = generator();
            spoil(elem);

            if (pruner(elem) === true)
                throw new Error(
                    `Bug on typia.misc.isPrune(): failed to detect error on the ${name} type.`,
                );
        }
    };
}

const iterate =
    (closure: (obj: any) => void) =>
    (input: any): void => {
        if (Array.isArray(input)) return iterate_array(closure)(input);
        else if (
            input !== null &&
            typeof input === "object" &&
            typeof input.valueOf() === "object"
        )
            return iterate_object(closure)(input);
    };

const iterate_object =
    (closure: (obj: any) => void) =>
    (input: any): void => {
        closure(input);
        for (const value of Object.values(input)) iterate(closure)(value);
    };

const iterate_array =
    (closure: (obj: any) => void) =>
    (input: any): void =>
        input.forEach((elem: any) => iterate(closure)(elem));
