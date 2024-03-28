import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_json_assertParseCustom_ObjectPartial = _test_json_assertParse(
  CustomGuardError,
)("ObjectPartial")<ObjectPartial>(ObjectPartial)((input) =>
  typia.json.assertParse<ObjectPartial>(input, (p) => new CustomGuardError(p)),
);
