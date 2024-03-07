import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ClassNonPublic = _test_assert(
  CustomGuardError,
)("ClassNonPublic")<ClassNonPublic>(ClassNonPublic)(
  typia.createAssert<ClassNonPublic>((p) => new CustomGuardError(p)),
);
