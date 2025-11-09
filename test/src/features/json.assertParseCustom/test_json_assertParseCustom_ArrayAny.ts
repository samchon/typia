import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAny } from "../../structures/ArrayAny";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ArrayAny = (): void => _test_json_assertParse(CustomGuardError)(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)((input) => typia.json.assertParse<ArrayAny>(input, (p) => new CustomGuardError(p)));
