import { Primitive } from "../../../src";
import { Spoiler } from "../../internal/Spoiler";
import { primitive_equal_to } from "../../internal/primitive_equal_to";

export function _test_isClone<T>(
    name: string,
    generator: () => T,
    cloner: (input: T) => Primitive<T> | null,
    spoilers?: Spoiler<T>[],
): () => void {
    return () => {
        const data: T = generator();
        const replica: Primitive<T> = JSON.parse(JSON.stringify(data));
        const cloned: Primitive<T> | null = cloner(data);

        if (primitive_equal_to(replica, cloned) === false) {
            throw new Error(
                `Bug on TSON.isClone(): failed to understand the ${name} type.`,
            );
        }

        for (const spoil of spoilers || []) {
            const paths = { value: [] as string[] };
            const elem: T = generator();
            spoil(elem);

            if (cloner(elem) !== null)
                throw new Error(
                    `Bug on TSON.isClone(): failed to detect error on the ${name} type.`,
                );
        }
    };
}
