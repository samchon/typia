import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_assertParametersCustom_ObjectDate = (): void =>
  _test_functional_assertParameters(CustomGuardError)("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => ObjectDate) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
