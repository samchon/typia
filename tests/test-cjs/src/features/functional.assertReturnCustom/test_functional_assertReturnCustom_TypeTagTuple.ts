import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertReturnCustom_TypeTagTuple = (): void =>
  _test_functional_assertReturn(CustomGuardError)("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
