import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_assertCustom_ObjectNullable = _test_assert(CustomGuardError)(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input) =>
  typia.assert<ObjectNullable>(input, (p) => new CustomGuardError(p)),
);
