import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_assertEqualsParametersAsync_TypeTagRange =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("TypeTagRange")(
    TypeTagRange,
  )((p: (input: TypeTagRange) => Promise<TypeTagRange>) =>
    typia.functional.assertEqualsParameters(p),
  );
