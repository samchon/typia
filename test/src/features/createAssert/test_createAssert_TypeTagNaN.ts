import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createAssert_TypeTagNaN = (): void =>
  _test_assert(TypeGuardError)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)(
    typia.createAssert<TypeTagNaN>(),
  );
