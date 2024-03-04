import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_functional_assertReturnCustom_TypeTagObjectUnion =
  _test_functional_assertReturn(CustomGuardError)("TypeTagObjectUnion")(
    TypeTagObjectUnion,
  )((p: (input: TypeTagObjectUnion) => TypeTagObjectUnion) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
