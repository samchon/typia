import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_ArrayRepeatedUnion = (): void => _test_json_assertStringify(CustomGuardError)(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)((input) => typia.json.assertStringify<ArrayRepeatedUnion>(input, (p) => new CustomGuardError(p)));
