import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectPrimitive = _test_assert(CustomGuardError)(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
  typia.assert<ObjectPrimitive>(input, (p) => new CustomGuardError(p)),
);
