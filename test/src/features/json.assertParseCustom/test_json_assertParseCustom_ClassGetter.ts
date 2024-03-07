import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassGetter } from "../../structures/ClassGetter";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ClassGetter = _test_json_assertParse(
  CustomGuardError,
)("ClassGetter")<ClassGetter>(ClassGetter)((input) =>
  typia.json.assertParse<ClassGetter>(input, (p) => new CustomGuardError(p)),
);
