import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertParameters_TypeTagObjectUnion = (): void =>
  _test_functional_assertParameters(TypeGuardError)("TypeTagObjectUnion")(
    TypeTagObjectUnion,
  )((p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
    typia.functional.assertParameters(p),
  );
