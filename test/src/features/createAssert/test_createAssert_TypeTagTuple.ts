import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createAssert_TypeTagTuple = (): void =>
  _test_assert(TypeGuardError)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
    typia.createAssert<TypeTagTuple>(),
  );
