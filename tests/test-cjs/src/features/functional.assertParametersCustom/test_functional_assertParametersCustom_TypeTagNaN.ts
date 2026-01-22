import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_functional_assertParametersCustom_TypeTagNaN = (): void =>
  _test_functional_assertParameters(CustomGuardError)("TypeTagNaN")(TypeTagNaN)(
    (p: (input: TypeTagNaN) => TypeTagNaN) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
