import { Primitive } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { primitive_equal_to } from "../helpers/primitive_equal_to";
import { _check_invalidate_json_value } from "./_check_invalidate_json_value";

export const _test_json_isParse =
    (name: string) =>
    <T>(factory: TestStructure<T>) =>
    (parse: (input: string) => Primitive<T> | null) =>
    () => {
        const data: T = factory.generate();
        const string: string = JSON.stringify(data);
        const expected: Primitive<T> = JSON.parse(string);
        const parsed: Primitive<T> | null = parse(string);

        if (parsed === null || primitive_equal_to(expected, parsed) === false) {
            throw new Error(
                `Bug on typia.json.isParse(): failed to understand the ${name} type.`,
            );
        }

        for (const spoil of factory.SPOILERS ?? []) {
            const elem: T = factory.generate();
            spoil(elem);
            if (_check_invalidate_json_value(elem)) continue;

            if (parse(JSON.stringify(elem)) !== null) {
                throw new Error(
                    `Bug on typia.json.isParse(): failed to detect error on the ${name} type.`,
                );
            }
        }
    };
