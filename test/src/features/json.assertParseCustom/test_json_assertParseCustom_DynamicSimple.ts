import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_DynamicSimple = _test_json_assertParse(
  CustomGuardError,
)("DynamicSimple")<DynamicSimple>(DynamicSimple)((input) =>
  typia.json.assertParse<DynamicSimple>(input, (p) => new CustomGuardError(p)),
);
