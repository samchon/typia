import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_TypeTagArray =
  _test_functional_assertEqualsParameters(CustomGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => TypeTagArray) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
