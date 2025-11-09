import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ArrayRepeatedNullable = (): void => _test_json_assertParse(CustomGuardError)(
    "ArrayRepeatedNullable",
)<ArrayRepeatedNullable>(
    ArrayRepeatedNullable
)(typia.json.createAssertParse<ArrayRepeatedNullable>((p) => new CustomGuardError(p)));
