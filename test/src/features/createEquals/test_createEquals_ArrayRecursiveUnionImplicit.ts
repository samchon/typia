import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createEquals_ArrayRecursiveUnionImplicit = (): void => _test_equals(
    "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(
    ArrayRecursiveUnionImplicit
)(typia.createEquals<ArrayRecursiveUnionImplicit>());
