import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assertCustom_ObjectGeneric = _test_assert(CustomGuardError)(
  "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)((input) =>
  typia.assert<ObjectGeneric>(input, (p) => new CustomGuardError(p)),
);
