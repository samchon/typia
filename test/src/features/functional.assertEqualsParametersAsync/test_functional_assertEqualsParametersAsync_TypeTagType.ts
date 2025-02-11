import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertEqualsParametersAsync_TypeTagType =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertEqualsParameters(p),
  );
