import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertFunctionAsync_TypeTagTuple =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagTuple")(
      TypeTagTuple,
    )((p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
      typia.functional.assertFunction(p),
    );
