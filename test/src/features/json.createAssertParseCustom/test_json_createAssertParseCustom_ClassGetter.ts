import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_createAssertParseCustom_ClassGetter =
  _test_json_assertParse(CustomGuardError)("ClassGetter")<ClassGetter>(
    ClassGetter,
  )(typia.json.createAssertParse<ClassGetter>((p) => new CustomGuardError(p)));
