import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_assertCustom_ObjectPropertyNullable = _test_assert(
  CustomGuardError,
)("ObjectPropertyNullable")<ObjectPropertyNullable>(ObjectPropertyNullable)(
  (input) =>
    typia.assert<ObjectPropertyNullable>(input, (p) => new CustomGuardError(p)),
);
