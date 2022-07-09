import { TypeGuardError } from "../../../src";

export function _test_assert_for_of<T>(
    name: string,
    generator: () => T[],
    assert: (input: T) => T,
    spoilers?: Array<(elem: T, index: number) => string | void>,
): () => void {
    return () => {
        for (const input of generator())
            try {
                if (input !== assert(input))
                    throw new Error(
                        "Bug on TSON.assertType(): failed to return input value.",
                    );
            } catch (exp) {
                if (exp instanceof TypeGuardError) {
                    console.log(exp.path, exp.value);
                    throw new Error(
                        `Bug on TSON.assertType(): failed to understand the ${name} type.`,
                    );
                } else throw exp;
            }

        for (const spoil of spoilers || []) {
            const data: T[] = generator();
            const path = { value: "" as string | void };
            data.forEach((elem, index) => {
                try {
                    path.value = spoil(elem, index);
                    assert(elem);
                } catch (exp) {
                    if (exp instanceof TypeGuardError)
                        if (
                            typeof path.value !== "string" ||
                            exp.path === path.value
                        )
                            return;
                        else
                            console.log({
                                input: path.value,
                                expected: exp.path,
                            });
                }
                throw new Error(
                    `Bug on TSON.assertType(): failed to detect error on the ${name} type.`,
                );
            });
        }
    };
}
