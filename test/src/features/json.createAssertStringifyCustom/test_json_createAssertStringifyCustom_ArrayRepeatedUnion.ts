import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_ArrayRepeatedUnion = (): void => _test_json_assertStringify(CustomGuardError)(
    "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(
    ArrayRepeatedUnion
)(typia.json.createAssertStringify<ArrayRepeatedUnion>((p) => new CustomGuardError(p)));
