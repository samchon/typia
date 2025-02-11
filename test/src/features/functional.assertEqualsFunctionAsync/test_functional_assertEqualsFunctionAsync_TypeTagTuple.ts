import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertEqualsFunctionAsync_TypeTagTuple =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.assertEqualsFunction(p),
  );
