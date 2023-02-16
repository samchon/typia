import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ArrayRecursiveUnionExplicit = _test_isStringify(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.isStringify(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
