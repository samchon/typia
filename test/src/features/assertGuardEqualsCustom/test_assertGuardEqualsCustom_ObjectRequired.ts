import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_assertGuardEqualsCustom_ObjectRequired = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )((input) =>
    typia.assertGuardEquals<ObjectRequired>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
