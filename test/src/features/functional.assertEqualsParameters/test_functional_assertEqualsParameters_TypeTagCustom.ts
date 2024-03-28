import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_functional_assertEqualsParameters_TypeTagCustom =
  _test_functional_assertEqualsParameters(TypeGuardError)("TypeTagCustom")(
    TypeTagCustom,
  )((p: (input: TypeTagCustom) => TypeTagCustom) =>
    typia.functional.assertEqualsParameters(p),
  );
