import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_TypeTagArray =
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => TypeTagArray) =>
    typia.functional.assertEqualsParameters(p),
  );
