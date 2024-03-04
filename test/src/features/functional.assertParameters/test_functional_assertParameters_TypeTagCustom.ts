import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertParameters_TypeTagCustom =
  _test_functional_assertParameters(TypeGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => TypeTagCustom) =>
    typia.functional.assertParameters(p),
  );
