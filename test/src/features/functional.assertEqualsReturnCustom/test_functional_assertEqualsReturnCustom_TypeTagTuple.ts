import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertEqualsReturnCustom_TypeTagTuple = (): void =>
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => TypeTagTuple) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
