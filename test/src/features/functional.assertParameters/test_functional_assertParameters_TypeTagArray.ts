import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertParameters_TypeTagArray =
  _test_functional_assertParameters(TypeGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => TypeTagArray) =>
    typia.functional.assertParameters(p),
  );
