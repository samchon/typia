import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertEqualsFunction_TypeTagTuple = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => TypeTagTuple) =>
    typia.functional.assertEqualsFunction(p),
  );
