import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_assertParseCustom_TypeTagRange = _test_json_assertParse(
  CustomGuardError,
)("TypeTagRange")<TypeTagRange>(TypeTagRange)((input) =>
  typia.json.assertParse<TypeTagRange>(input, (p) => new CustomGuardError(p)),
);
