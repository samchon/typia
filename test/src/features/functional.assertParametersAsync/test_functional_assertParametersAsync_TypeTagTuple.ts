import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertParametersAsync_TypeTagTuple =
  _test_functional_assertParametersAsync(TypeGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.assertParameters(p),
  );
