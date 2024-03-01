import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_createAssertCustom_ObjectUnionDouble = _test_assert(
  CustomGuardError,
)("ObjectUnionDouble")<ObjectUnionDouble>(ObjectUnionDouble)(
  typia.createAssert<ObjectUnionDouble>((p) => new CustomGuardError(p)),
);
