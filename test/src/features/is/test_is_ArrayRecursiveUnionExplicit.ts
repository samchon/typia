import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_is_ArrayRecursiveUnionExplicit = (): void => _test_is(
    "ArrayRecursiveUnionExplicit",
)<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit
)((input) => typia.is<ArrayRecursiveUnionExplicit>(input));
