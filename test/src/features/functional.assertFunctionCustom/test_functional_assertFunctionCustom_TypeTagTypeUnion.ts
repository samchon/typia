import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_assertFunctionCustom_TypeTagTypeUnion = (): void =>
  _test_functional_assertFunction(CustomGuardError)("TypeTagTypeUnion")(
    TypeTagTypeUnion,
  )((p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
