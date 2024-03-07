import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { TypeGuardError } from "typia";

export const test_json_assertParse_UltimateUnion = _test_json_assertParse(
  TypeGuardError,
)("UltimateUnion")<UltimateUnion>(UltimateUnion)((input) =>
  typia.json.assertParse<UltimateUnion>(input),
);
