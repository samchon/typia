import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_createAssertCustom_TypeTagTuple = (): void =>
  _test_assert(CustomGuardError)("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)(
    typia.createAssert<TypeTagTuple>((p) => new CustomGuardError(p)),
  );
