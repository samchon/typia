import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_json_createAssertParseCustom_TypeTagRange = (): void =>
  _test_json_assertParse(CustomGuardError)("TypeTagRange")<TypeTagRange>(
    TypeTagRange,
  )(typia.json.createAssertParse<TypeTagRange>((p) => new CustomGuardError(p)));
