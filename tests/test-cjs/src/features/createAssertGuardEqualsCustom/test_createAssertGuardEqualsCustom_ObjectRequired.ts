import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_createAssertGuardEqualsCustom_ObjectRequired = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )(
    typia.createAssertGuardEquals<ObjectRequired>(
      (p) => new CustomGuardError(p),
    ),
  );
