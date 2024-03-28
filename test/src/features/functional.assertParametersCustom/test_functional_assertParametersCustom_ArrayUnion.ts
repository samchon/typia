import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertParametersCustom_ArrayUnion =
  _test_functional_assertParameters(CustomGuardError)("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
