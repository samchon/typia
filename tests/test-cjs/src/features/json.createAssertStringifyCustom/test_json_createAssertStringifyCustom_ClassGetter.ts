import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_createAssertStringifyCustom_ClassGetter = (): void =>
  _test_json_assertStringify(CustomGuardError)("ClassGetter")<ClassGetter>(
    ClassGetter,
  )(
    typia.json.createAssertStringify<ClassGetter>(
      (p) => new CustomGuardError(p),
    ),
  );
