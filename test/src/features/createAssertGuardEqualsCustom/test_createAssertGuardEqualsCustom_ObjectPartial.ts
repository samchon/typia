import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_ObjectPartial =
  _test_assertGuardEquals(CustomGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )(
    typia.createAssertGuardEquals<ObjectPartial>(
      (p) => new CustomGuardError(p),
    ),
  );
