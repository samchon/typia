import { Primitive, TypeGuardError } from "../../../src";
import { Spoiler } from "../../internal/Spoiler";
import { primitive_equal_to } from "../../internal/primitive_equal_to";

export function _test_assertClone<T>(
    name: string,
    generator: () => T,
    cloner: (input: T) => Primitive<T>,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        const data: T = generator();
        const replica: Primitive<T> = JSON.parse(JSON.stringify(data));
        const cloned: Primitive<T> = cloner(data);

        if (primitive_equal_to(replica, cloned) === false) {
            throw new Error(
                `Bug on TSON.assertClone(): failed to understand the ${name} type.`,
            );
        }

        for (const spoil of spoilers || []) {
            const paths = { value: [] as string[] };
            const elem: T = generator();
            try {
                paths.value = spoil(elem);
                cloner(elem);
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
                `Bug on TSON.assertClone(): failed to detect error on the ${name} type.`,
            );
        }
    };
}
