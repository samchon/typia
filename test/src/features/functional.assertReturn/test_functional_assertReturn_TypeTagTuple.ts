import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertReturn_TypeTagTuple =
  _test_functional_assertReturn(TypeGuardError)("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.assertReturn(p),
  );
