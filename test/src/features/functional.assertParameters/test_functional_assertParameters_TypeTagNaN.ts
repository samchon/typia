import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertParameters_TypeTagNaN =
  _test_functional_assertParameters(TypeGuardError)("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) =>
      typia.functional.assertParameters(p),
  );
