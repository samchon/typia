import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_createAssertStringifyCustom_ClassMethod =
  _test_json_assertStringify(CustomGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )(
    typia.json.createAssertStringify<ClassMethod>(
      (p) => new CustomGuardError(p),
    ),
  );
