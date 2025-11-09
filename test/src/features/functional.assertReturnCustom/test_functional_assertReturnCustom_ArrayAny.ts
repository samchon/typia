import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_assertReturnCustom_ArrayAny = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ArrayAny")(ArrayAny)(
    (p: (input: ArrayAny) => ArrayAny) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
