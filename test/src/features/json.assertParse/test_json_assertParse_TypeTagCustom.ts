import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_assertParse_TypeTagCustom = _test_json_assertParse(
  TypeGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.json.assertParse<TypeTagCustom>(input),
);
