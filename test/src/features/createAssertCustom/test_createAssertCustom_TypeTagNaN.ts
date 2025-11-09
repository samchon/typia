import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_createAssertCustom_TypeTagNaN = (): void =>
  _test_assert(CustomGuardError)("TypeTagNaN")<TypeTagNaN>(TypeTagNaN)(
    typia.createAssert<TypeTagNaN>((p) => new CustomGuardError(p)),
  );
