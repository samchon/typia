import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_assertGuardEqualsCustom_ObjectPartial = (): void =>
  _test_assertGuardEquals(CustomGuardError)("ObjectPartial")<ObjectPartial>(
    ObjectPartial,
  )((input) =>
    typia.assertGuardEquals<ObjectPartial>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
