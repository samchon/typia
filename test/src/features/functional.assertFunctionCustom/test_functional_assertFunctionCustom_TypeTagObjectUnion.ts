import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertFunctionCustom_TypeTagObjectUnion =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("TypeTagObjectUnion")(
      TypeTagObjectUnion,
    )((p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
