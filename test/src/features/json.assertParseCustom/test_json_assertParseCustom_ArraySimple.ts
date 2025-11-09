import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ArraySimple = (): void => _test_json_assertParse(CustomGuardError)(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)((input) => typia.json.assertParse<ArraySimple>(input, (p) => new CustomGuardError(p)));
