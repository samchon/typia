import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_assertGuardCustom_TypeTagType = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagType")<TypeTagType>(TypeTagType)(
    (input) =>
      typia.assertGuard<TypeTagType>(input, (p) => new CustomGuardError(p)),
  );
