import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_json_assertParseCustom_ArrayAny = _test_json_assertParse(
  CustomGuardError,
)("ArrayAny")<ArrayAny>(ArrayAny)((input) =>
  typia.json.assertParse<ArrayAny>(input, (p) => new CustomGuardError(p)),
);
