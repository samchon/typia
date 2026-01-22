import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertEqualsReturn_TypeTagType = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => TypeTagType) =>
    typia.functional.assertEqualsReturn(p),
  );
