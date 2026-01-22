import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_json_createAssertParseCustom_ArraySimple = (): void =>
  _test_json_assertParse(CustomGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )(typia.json.createAssertParse<ArraySimple>((p) => new CustomGuardError(p)));
