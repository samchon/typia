import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ObjectDynamic = _test_json_assertParse(
  CustomGuardError,
)("ObjectDynamic")<ObjectDynamic>(ObjectDynamic)((input) =>
  typia.json.assertParse<ObjectDynamic>(input, (p) => new CustomGuardError(p)),
);
