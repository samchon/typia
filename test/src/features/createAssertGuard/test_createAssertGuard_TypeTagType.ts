import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_createAssertGuard_TypeTagType = (): void =>
  _test_assertGuard(TypeGuardError)("TypeTagType")<TypeTagType>(TypeTagType)(
    typia.createAssertGuard<TypeTagType>(),
  );
