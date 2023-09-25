import typia from "typia";

import { TestStructure } from "../helpers/TestStructure";
import { query_to_string } from "../helpers/query_to_string";
import { resolved_equal_to } from "../helpers/resolved_equal_to";

export const _test_http_query =
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
                `Bug on typia.http.query(): failed to understand ${name} type.`,
            );
    };
