import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_assertCustom_ClassGetter = _test_assert(CustomGuardError)(
  "ClassGetter",
)<ClassGetter>(ClassGetter)((input) =>
  typia.assert<ClassGetter>(input, (p) => new CustomGuardError(p)),
);
