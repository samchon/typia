import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_json_assertStringifyCustom_ClassGetter =
  _test_json_assertStringify(CustomGuardError)("ClassGetter")<ClassGetter>(
    ClassGetter,
  )((input) =>
    typia.json.assertStringify<ClassGetter>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
