import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_json_assertParseCustom_TypeTagCustom = _test_json_assertParse(
  CustomGuardError,
)("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)((input) =>
  typia.json.assertParse<TypeTagCustom>(input, (p) => new CustomGuardError(p)),
);
