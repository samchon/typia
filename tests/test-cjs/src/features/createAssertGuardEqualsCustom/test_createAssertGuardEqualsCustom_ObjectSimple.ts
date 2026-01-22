import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_createAssertGuardEqualsCustom_ObjectSimple = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )(
    typia.createAssertGuardEquals<ObjectSimple>((p) => new CustomGuardError(p)),
  );
