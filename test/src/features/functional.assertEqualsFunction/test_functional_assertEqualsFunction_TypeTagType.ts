import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_TypeTagType =
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => TypeTagType) =>
    typia.functional.assertEqualsFunction(p),
  );
