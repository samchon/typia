import { TypeGuardError } from "../../../src";
import { Spoiler } from "../../internal/Spoiler";
import { primitive_equal_to } from "../../internal/primitive_equal_to";

export const _test_assertParse =
    <T>(
        name: string,
        generator: () => T,
        parser: (input: string) => T,
        spoilers?: Spoiler<T>[],
    ) =>
    () => {
        const data: T = generator();
        const string: string = JSON.stringify(data);
        const parsed: T = parser(string);

        if (primitive_equal_to(data, parsed) === false) {
            throw new Error(
                `Bug on TSON.assertParse(): failed to understand the ${name} type.`,
            );
        }

        for (const spoil of spoilers || []) {
            const paths = { value: [] as string[] };
            const elem: T = generator();

            try {
                paths.value = spoil(elem);
                parser(JSON.stringify(elem));
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && paths.value.includes(exp.path) === true)
                        continue;
                    else
                        console.log({
                            input: paths.value,
                            expected: exp.path,
                        });
            }
            throw new Error(
                `Bug on TSON.assertParse(): failed to detect error on the ${name} type.`,
            );
        }
    };
