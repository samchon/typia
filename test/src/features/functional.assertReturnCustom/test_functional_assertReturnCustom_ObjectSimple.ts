import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_assertReturnCustom_ObjectSimple =
  _test_functional_assertReturn(CustomGuardError)("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
