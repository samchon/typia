import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArrayRecursiveUnionExplicit = (): void => _test_assert(CustomGuardError)(
    "ArrayRecursiveUnionExplicit",
)<ArrayRecursiveUnionExplicit>(
    ArrayRecursiveUnionExplicit
)(typia.createAssert<ArrayRecursiveUnionExplicit>((p) => new CustomGuardError(p)));
