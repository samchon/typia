import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_createAssertCustom_TypeTagRange = (): void =>
  _test_assert(CustomGuardError)("TypeTagRange")<TypeTagRange>(TypeTagRange)(
    typia.createAssert<TypeTagRange>((p) => new CustomGuardError(p)),
  );
