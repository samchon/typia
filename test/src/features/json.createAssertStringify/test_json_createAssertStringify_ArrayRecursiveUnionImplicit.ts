import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_ArrayRecursiveUnionImplicit = (): void => _test_json_assertStringify(TypeGuardError)(
    "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(
    ArrayRecursiveUnionImplicit
)(typia.json.createAssertStringify<ArrayRecursiveUnionImplicit>());
