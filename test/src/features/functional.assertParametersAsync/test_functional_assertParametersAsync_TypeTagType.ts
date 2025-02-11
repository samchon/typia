import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_assertParametersAsync_TypeTagType =
  _test_functional_assertParametersAsync(TypeGuardError)("TypeTagType")(
    TypeTagType,
  )((p: (input: TypeTagType) => Promise<TypeTagType>) =>
    typia.functional.assertParameters(p),
  );
