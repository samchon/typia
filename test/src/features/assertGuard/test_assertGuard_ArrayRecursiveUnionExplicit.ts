import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_assertGuard_ArrayRecursiveUnionExplicit = (): void => _test_assertGuard(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
)<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit
)((input) => typia.assertGuard<ArrayRecursiveUnionExplicit>(input));
