import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_ArrayRecursiveUnionImplicit = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(
    ArrayRecursiveUnionImplicit
)(typia.createAssertGuardEquals<ArrayRecursiveUnionImplicit>());
