import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ArrayRecursiveUnionExplicit = _test_isClone(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.isClone(input),
    ArrayRecursiveUnionExplicit.SPOILERS,
);
