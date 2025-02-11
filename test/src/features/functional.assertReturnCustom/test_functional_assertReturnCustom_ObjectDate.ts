import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_assertReturnCustom_ObjectDate =
  _test_functional_assertReturn(CustomGuardError)("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => ObjectDate) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
