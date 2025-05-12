import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertParametersCustom_TypeTagArray =
  _test_functional_assertParameters(CustomGuardError)("TypeTagArray")(
    TypeTagArray,
  )((p: (input: TypeTagArray) => TypeTagArray) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
