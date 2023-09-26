import typia, { TypeGuardError } from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { query_to_string } from "../helpers/query_to_string";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_http_assertQuery =
    (name: string) =>
    <T extends object>(factory: TestStructure<T>) =>
    (decode: (input: URLSearchParams) => typia.Resolved<T>) =>
    () => {
        const data: T = factory.generate();
        const encoded: URLSearchParams = query_to_string(data);
        const decoded: typia.Resolved<T> = decode(encoded);

        const equal: boolean = resolved_equal_to(name)(data, decoded);
        if (equal === false)
            throw new Error(
                `Bug on typia.http.assertQuery(): failed to understand ${name} type.`,
            );

        for (const spoil of factory.SPOILERS ?? []) {
            const elem: T = factory.generate();
            const expected: string[] = spoil(elem);

            try {
                decode(query_to_string(elem));
            } catch (exp) {
                if (exp instanceof TypeGuardError)
                    if (exp.path && expected.includes(exp.path) === true)
                        continue;
                    else
                        console.log({
                            expected,
                            actual: exp.path,
                        });
            }
            throw new Error(
                `Bug on typia.http.assertQuery(): failed to detect error on the ${name} type.`,
            );
        }
    };
