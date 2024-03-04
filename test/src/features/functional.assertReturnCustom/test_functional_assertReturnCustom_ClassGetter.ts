import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_assertReturnCustom_ClassGetter =
  _test_functional_assertReturn(CustomGuardError)("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
