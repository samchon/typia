import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ClassMethod = _test_json_assertParse(
  CustomGuardError,
)("ClassMethod")<ClassMethod>(ClassMethod)((input) =>
  typia.json.assertParse<ClassMethod>(input, (p) => new CustomGuardError(p)),
);
