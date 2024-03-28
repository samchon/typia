import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_assertCustom_ClassNonPublic = _test_assert(CustomGuardError)(
  "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)((input) =>
  typia.assert<ClassNonPublic>(input, (p) => new CustomGuardError(p)),
);
