import typia from "typia";

import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_is } from "../internal/_test_is";

export const test_is_ArrayRecursiveUnionImplicit = _test_is(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) => typia.is(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
