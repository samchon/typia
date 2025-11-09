import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ArrayRecursiveUnionExplicit = (): void => _test_assertEquals(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
)<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit
)(typia.createAssertEquals<ArrayRecursiveUnionExplicit>());
