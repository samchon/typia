import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_json_createAssertParseCustom_ArrayUnion =
  _test_json_assertParse(CustomGuardError)("ArrayUnion")<ArrayUnion>(
    ArrayUnion,
  )(typia.json.createAssertParse<ArrayUnion>((p) => new CustomGuardError(p)));
