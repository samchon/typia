import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertParametersAsync_TypeTagObjectUnion =
  _test_functional_assertParametersAsync(TypeGuardError)("TypeTagObjectUnion")(
    TypeTagObjectUnion,
  )((p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
    typia.functional.assertParameters(p),
  );
