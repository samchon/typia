import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertEqualsReturn_TypeTagTuple =
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => TypeTagTuple) =>
    typia.functional.assertEqualsReturn(p),
  );
