import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createAssertCustom_TypeTagLength = (): void =>
  _test_assert(CustomGuardError)("TypeTagLength")<TypeTagLength>(TypeTagLength)(
    typia.createAssert<TypeTagLength>((p) => new CustomGuardError(p)),
  );
