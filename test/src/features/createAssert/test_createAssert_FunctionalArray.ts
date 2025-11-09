import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_createAssert_FunctionalArray = (): void =>
  _test_assert(TypeGuardError)("FunctionalArray")<FunctionalArray>(
    FunctionalArray,
  )(typia.createAssert<FunctionalArray>());
