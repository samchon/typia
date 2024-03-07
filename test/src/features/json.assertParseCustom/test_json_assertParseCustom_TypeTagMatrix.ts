import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_TypeTagMatrix = _test_json_assertParse(
  CustomGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.json.assertParse<TypeTagMatrix>(input, (p) => new CustomGuardError(p)),
);
