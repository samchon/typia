import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_assertCustom_ObjectDynamic = _test_assert(CustomGuardError)(
  "ObjectDynamic",
)<ObjectDynamic>(ObjectDynamic)((input) =>
  typia.assert<ObjectDynamic>(input, (p) => new CustomGuardError(p)),
);
