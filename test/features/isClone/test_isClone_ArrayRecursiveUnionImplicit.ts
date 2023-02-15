import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ArrayRecursiveUnionImplicit = _test_isClone(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.isClone(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
