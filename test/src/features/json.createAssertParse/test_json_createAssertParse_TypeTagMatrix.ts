import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_json_createAssertParse_TypeTagMatrix = _test_json_assertParse(
  TypeGuardError,
)("TypeTagMatrix")<TypeTagMatrix>(TypeTagMatrix)(
  typia.json.createAssertParse<TypeTagMatrix>(),
);
