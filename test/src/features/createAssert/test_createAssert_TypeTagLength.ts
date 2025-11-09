import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createAssert_TypeTagLength = (): void =>
  _test_assert(TypeGuardError)("TypeTagLength")<TypeTagLength>(TypeTagLength)(
    typia.createAssert<TypeTagLength>(),
  );
