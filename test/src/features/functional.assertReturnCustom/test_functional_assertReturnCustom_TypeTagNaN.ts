import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertReturnCustom_TypeTagNaN =
  _test_functional_assertReturn(CustomGuardError)("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
