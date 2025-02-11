import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_assertEqualsParametersAsync_TypeTagTuple =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("TypeTagTuple")(
    TypeTagTuple,
  )((p: (input: TypeTagTuple) => Promise<TypeTagTuple>) =>
    typia.functional.assertEqualsParameters(p),
  );
