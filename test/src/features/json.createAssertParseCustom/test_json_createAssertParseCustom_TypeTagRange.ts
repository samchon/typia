import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_TypeTagRange =
  _test_json_assertParse(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )(typia.json.createAssertParse<TypeTagRange>((p) => new CustomGuardError(p)));
