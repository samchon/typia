import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_TypeTagObjectUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagObjectUnion")(
    TypeTagObjectUnion,
  )((p: (input: TypeTagObjectUnion) => Promise<TypeTagObjectUnion>) =>
    typia.functional.assertReturn(p),
  );
