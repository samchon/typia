import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_json_createAssertParseCustom_TypeTagArray =
  _test_json_assertParse(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(typia.json.createAssertParse<TypeTagArray>((p) => new CustomGuardError(p)));
