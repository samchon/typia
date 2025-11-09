import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertFunction_TypeTagCustom = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => TypeTagCustom) =>
    typia.functional.assertFunction(p),
  );
