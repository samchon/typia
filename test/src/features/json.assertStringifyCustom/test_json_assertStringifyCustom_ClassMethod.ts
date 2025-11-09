import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_json_assertStringifyCustom_ClassMethod = (): void =>
  _test_json_assertStringify(CustomGuardError)("ClassMethod")<ClassMethod>(
    ClassMethod,
  )((input) =>
    typia.json.assertStringify<ClassMethod>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
