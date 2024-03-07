import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_TypeTagTuple = _test_json_assertParse(
  CustomGuardError,
)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)((input) =>
  typia.json.assertParse<TypeTagTuple>(input, (p) => new CustomGuardError(p)),
);
