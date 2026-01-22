import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_createAssertGuardEqualsCustom_ObjectPartial = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )(
    typia.createAssertGuardEquals<ObjectPartial>(
      (p) => new CustomGuardError(p),
    ),
  );
