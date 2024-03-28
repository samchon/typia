import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertFunction_TypeTagTuple =
  _test_functional_assertFunction(TypeGuardError)("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.assertFunction(p),
  );
