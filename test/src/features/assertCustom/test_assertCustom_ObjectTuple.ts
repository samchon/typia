import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectTuple } from "../../structures/ObjectTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectTuple = _test_assert(CustomGuardError)(
  "ObjectTuple",
)<ObjectTuple>(ObjectTuple)((input) =>
  typia.assert<ObjectTuple>(input, (p) => new CustomGuardError(p)),
);
