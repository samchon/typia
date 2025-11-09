import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_createAssert_ArrayRecursiveUnionExplicit = (): void => _test_assert(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
)<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit
)(typia.createAssert<ArrayRecursiveUnionExplicit>());
