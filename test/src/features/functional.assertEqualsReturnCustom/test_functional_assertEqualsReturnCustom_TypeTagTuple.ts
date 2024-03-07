import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_TypeTagTuple =
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => TypeTagTuple) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
