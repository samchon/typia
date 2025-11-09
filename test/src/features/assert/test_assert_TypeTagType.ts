import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_assert_TypeTagType = (): void =>
  _test_assert(TypeGuardError)("TypeTagType")<TypeTagType>(TypeTagType)(
    (input) => typia.assert<TypeTagType>(input),
  );
