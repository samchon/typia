import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertReturn_TypeTagObjectUnion =
  _test_functional_assertReturn(TypeGuardError)("TypeTagObjectUnion")(
    TypeTagObjectUnion,
  )((p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
    typia.functional.assertReturn(p),
  );
