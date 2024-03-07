import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { TypeGuardError } from "typia";

export const test_json_assertParse_DynamicUnion = _test_json_assertParse(
  TypeGuardError,
)("DynamicUnion")<DynamicUnion>(DynamicUnion)((input) =>
  typia.json.assertParse<DynamicUnion>(input),
);
