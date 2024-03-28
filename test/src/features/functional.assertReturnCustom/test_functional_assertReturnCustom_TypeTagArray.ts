import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_assertReturnCustom_TypeTagArray =
  _test_functional_assertReturn(CustomGuardError)("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
