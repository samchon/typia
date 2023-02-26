import typia from "typia";
import { Primitive, TypeGuardError } from "typia";

import { Spoiler } from "../../../internal/Spoiler";
import { primitive_equal_to } from "../../../internal/primitive_equal_to";

export const _test_assertParse =
    <T>(
        name: string,
        generator: () => T,
        parser: (input: string) => Primitive<T>,
        spoilers?: Spoiler<T>[],
    ) =>
    () => {
        const data: T = generator();
        const string: string = JSON.stringify(data);
        const expected: Primitive<T> = JSON.parse(string);
        const parsed: Primitive<T> = parser(string);
        if (primitive_equal_to(expected, parsed) === false) {
            throw new Error(
                `Bug on typia.assertParse(): failed to understand the ${name} type.`,
            );
        }
        for (const spoil of spoilers ?? []) {
            const elem: T = generator();
            const paths: string[] = spoil(elem);
            try {
                parser(JSON.stringify(elem));
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && paths.includes(exp.path) === true) continue;
                    else
                        console.log({
                            input: paths,
                            expected: exp.path,
                        });
            }
            throw new Error(
                `Bug on typia.assertParse(): failed to detect error on the ${name} type.`,
            );
        }
    };
