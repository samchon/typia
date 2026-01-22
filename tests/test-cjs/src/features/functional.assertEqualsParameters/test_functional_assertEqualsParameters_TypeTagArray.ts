import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertEqualsParameters_TypeTagArray = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => TypeTagArray) =>
    typia.functional.assertEqualsParameters(p),
  );
