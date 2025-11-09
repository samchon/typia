import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayAny } from "../../structures/ArrayAny";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ArrayAny = (): void => _test_json_assertStringify(CustomGuardError)(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)((input) => typia.json.assertStringify<ArrayAny>(input, (p) => new CustomGuardError(p)));
