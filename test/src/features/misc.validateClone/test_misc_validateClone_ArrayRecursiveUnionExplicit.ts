import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_validateClone_ArrayRecursiveUnionExplicit = (): void => _test_misc_validateClone(
    "ArrayRecursiveUnionExplicit",
)<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit
)((input) => typia.misc.validateClone<ArrayRecursiveUnionExplicit>(input));
