import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectPartial = _test_json_assertParse(
  CustomGuardError,
)("ObjectPartial")<ObjectPartial>(ObjectPartial)((input) =>
  typia.json.assertParse<ObjectPartial>(input, (p) => new CustomGuardError(p)),
);
