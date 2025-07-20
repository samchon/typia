import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_assertGuardEqualsCustom_ClassGetter = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ClassGetter")<ClassGetter>(
    ClassGetter,
  )((input) =>
    typia.assertGuardEquals<ClassGetter>(input, (p) => new CustomGuardError(p)),
  );
