import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_assertReturnCustom_ArraySimple =
  _test_functional_assertReturn(CustomGuardError)("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
