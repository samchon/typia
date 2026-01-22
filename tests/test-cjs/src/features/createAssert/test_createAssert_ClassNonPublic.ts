import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_createAssert_ClassNonPublic = (): void =>
  _test_assert(TypeGuardError)("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic,
  )(typia.createAssert<ClassNonPublic>());
