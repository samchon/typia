import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertReturnCustom_TypeTagRange = (): void =>
  _test_functional_assertReturn(CustomGuardError)("TypeTagRange")(TypeTagRange)(
    (p: (input: TypeTagRange) => TypeTagRange) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
