import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ArrayRecursiveUnionExplicitPointer = (): void => _test_json_assertStringify(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)(typia.json.createAssertStringify<ArrayRecursiveUnionExplicitPointer>((p) => new CustomGuardError(p)));
