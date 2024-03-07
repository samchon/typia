import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { TypeGuardError } from "typia";

export const test_json_assertParse_TypeTagMatrix = _test_json_assertParse(
  TypeGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)((input) =>
  typia.json.assertParse<TypeTagMatrix>(input),
);
