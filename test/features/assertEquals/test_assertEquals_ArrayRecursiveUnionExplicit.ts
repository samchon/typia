import typia from "typia";

import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_ArrayRecursiveUnionExplicit = _test_assertEquals(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) => typia.assertEquals(input),
);
