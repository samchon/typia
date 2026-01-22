import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_assertCustom_TypeTagType = (): void =>
  _test_assert(CustomGuardError)("TypeTagType")<TypeTagType>(TypeTagType)(
    (input) => typia.assert<TypeTagType>(input, (p) => new CustomGuardError(p)),
  );
