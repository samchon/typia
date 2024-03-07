import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_TypeTagLength = _test_json_assertParse(
  CustomGuardError,
)("TypeTagLength")<TypeTagLength>(TypeTagLength)((input) =>
  typia.json.assertParse<TypeTagLength>(input, (p) => new CustomGuardError(p)),
);
