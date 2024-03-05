import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_assertReturnCustom_ArrayUnion =
  _test_functional_assertReturn(CustomGuardError)("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
