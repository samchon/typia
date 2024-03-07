import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_TypeTagTuple =
  _test_functional_assertReturn(TypeGuardError)("TypeTagTuple")(TypeTagTuple)(
    (p: (input: TypeTagTuple) => TypeTagTuple) =>
      typia.functional.assertReturn(p),
  );
