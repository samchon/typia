import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_TypeTagRange =
  _test_functional_assertReturn(CustomGuardError)("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => TypeTagRange) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
