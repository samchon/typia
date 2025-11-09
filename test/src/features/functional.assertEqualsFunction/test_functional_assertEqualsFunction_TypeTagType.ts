import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertEqualsFunction_TypeTagType = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => TypeTagType) =>
    typia.functional.assertEqualsFunction(p),
  );
