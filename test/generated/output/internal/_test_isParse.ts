import typia from "typia";

import { Primitive } from "typia";
import { Spoiler } from "../../internal/Spoiler";
import { primitive_equal_to } from "../../internal/primitive_equal_to";
export const _test_isParse = <T>(name: string, generator: () => T, parser: (input: string) => Primitive<T> | null, spoilers?: Spoiler<T>[]) => () => {
    const data: T = generator();
    const string: string = JSON.stringify(data);
    const expected: Primitive<T> = JSON.parse(string);
    const parsed: Primitive<T> | null = parser(string);
    if (parsed === null || primitive_equal_to(expected, parsed) === false) {
        throw new Error(`Bug on typia.isParse(): failed to understand the ${name} type.`);
    }
    for (const spoil of spoilers ?? []) {
        const elem: T = generator();
        spoil(elem);
        if (parser(JSON.stringify(elem)) !== null) {
            throw new Error(`Bug on typia.isParse(): failed to detect error on the ${name} type.`);
        }
    }
};
