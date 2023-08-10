import { TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";

export const _test_assertType =
    <T>(factory: TestStructure<T>) =>
    (assertType: (input: T) => T) =>
    () => {
        try {
            const input: T = factory.generate();
            const output: T = assertType(input);

            if (input !== output)
                throw new Error(
                    "Bug on typia.assertType(): failed to return input value.",
                );
        } catch (exp) {
            if (exp instanceof TypeGuardError) {
                console.log(exp);
                throw new Error(
                    `Bug on typia.assertType(): failed to understand the ${factory.constructor.name} type.`,
                );
            } else throw exp;
        }

        for (const spoil of factory.SPOILERS ?? []) {
            const elem: T = factory.generate();
            const expected: string[] = spoil(elem);

            try {
                assertType(elem);
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && expected.includes(exp.path) === true)
                        continue;
                    else
                        console.log({
                            expected: expected,
                            actual: exp.path,
                        });
            }
            throw new Error(
                `Bug on typia.assertType(): failed to detect error on the ${factory.constructor.name} type.`,
            );
        }
    };
