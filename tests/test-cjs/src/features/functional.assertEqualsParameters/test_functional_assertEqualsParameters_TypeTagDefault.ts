import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_functional_assertEqualsParameters_TypeTagDefault = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagDefault")(
    TypeTagDefault,
  )((p: (input: TypeTagDefault) => TypeTagDefault) =>
    typia.functional.assertEqualsParameters(p),
  );
