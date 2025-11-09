import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertReturn_TypeTagType = (): void =>
  _test_functional_assertReturn(TypeGuardError)("TypeTagType")(TypeTagType)(
    (p: (input: TypeTagType) => TypeTagType) =>
      typia.functional.assertReturn(p),
  );
