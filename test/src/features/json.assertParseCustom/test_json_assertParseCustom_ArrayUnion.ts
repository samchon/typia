import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_ArrayUnion = _test_json_assertParse(
  CustomGuardError,
)("ArrayUnion")<ArrayUnion>(ArrayUnion)((input) =>
  typia.json.assertParse<ArrayUnion>(input, (p) => new CustomGuardError(p)),
);
