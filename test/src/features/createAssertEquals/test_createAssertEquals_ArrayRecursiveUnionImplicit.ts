import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ArrayRecursiveUnionImplicit = (): void => _test_assertEquals(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(
    ArrayRecursiveUnionImplicit
)(typia.createAssertEquals<ArrayRecursiveUnionImplicit>());
