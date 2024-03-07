import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_DynamicUnion = _test_json_assertParse(
  CustomGuardError,
)("DynamicUnion")<DynamicUnion>(DynamicUnion)((input) =>
  typia.json.assertParse<DynamicUnion>(input, (p) => new CustomGuardError(p)),
);
