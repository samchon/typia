import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_assertGuardEqualsCustom_ObjectSimple =
  _test_assertGuardEquals(CustomGuardError)("ObjectSimple")<ObjectSimple>(
    ObjectSimple,
  )((input) =>
    typia.assertGuardEquals<ObjectSimple>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
