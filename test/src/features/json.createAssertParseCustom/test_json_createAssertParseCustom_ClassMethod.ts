import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ClassMethod } from "../../structures/ClassMethod";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertParseCustom_ClassMethod =
  _test_json_assertParse(CustomGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )(typia.json.createAssertParse<ClassMethod>((p) => new CustomGuardError(p)));
