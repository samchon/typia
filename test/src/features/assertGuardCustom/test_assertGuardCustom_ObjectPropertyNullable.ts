import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_assertGuardCustom_ObjectPropertyNullable = _test_assertGuard(
  CustomGuardError,
)("ObjectPropertyNullable")<ObjectPropertyNullable>(ObjectPropertyNullable)(
  (input) =>
    typia.assertGuard<ObjectPropertyNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
);
