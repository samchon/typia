import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_createAssert_ObjectDate = (): void =>
  _test_assert(TypeGuardError)("ObjectDate")<ObjectDate>(ObjectDate)(
    typia.createAssert<ObjectDate>(),
  );
