import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ArraySimple =
  _test_json_assertParse(CustomGuardError)("ArraySimple")<ArraySimple>(
    ArraySimple,
  )(typia.json.createAssertParse<ArraySimple>((p) => new CustomGuardError(p)));
