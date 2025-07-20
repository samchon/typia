import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_createAssertCustom_ClassNonPublic = (): void =>
  _test_assert(CustomGuardError)("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )(typia.createAssert<ClassNonPublic>((p) => new CustomGuardError(p)));
