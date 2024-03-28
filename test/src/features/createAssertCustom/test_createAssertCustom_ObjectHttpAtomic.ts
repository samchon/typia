import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createAssertCustom_ObjectHttpAtomic = _test_assert(
  CustomGuardError,
)("ObjectHttpAtomic")<ObjectHttpAtomic>(ObjectHttpAtomic)(
  typia.createAssert<ObjectHttpAtomic>((p) => new CustomGuardError(p)),
);
