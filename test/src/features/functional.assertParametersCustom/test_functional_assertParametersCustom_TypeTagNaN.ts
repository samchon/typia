import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_TypeTagNaN =
  _test_functional_assertParameters(CustomGuardError)("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
