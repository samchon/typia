import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_TypeTagObjectUnion =
  _test_functional_assertParameters(TypeGuardError)("TypeTagObjectUnion")(
    TypeTagObjectUnion,
  )((p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
    typia.functional.assertParameters(p),
  );
