import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_json_createAssertParseCustom_ObjectSimple =
  _test_json_assertParse(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )(typia.json.createAssertParse<ObjectSimple>((p) => new CustomGuardError(p)));
