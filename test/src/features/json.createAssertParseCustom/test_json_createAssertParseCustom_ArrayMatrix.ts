import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ArrayMatrix =
  _test_json_assertParse(CustomGuardError)("ArrayMatrix")<ArrayMatrix>(
    ArrayMatrix,
  )(typia.json.createAssertParse<ArrayMatrix>((p) => new CustomGuardError(p)));
