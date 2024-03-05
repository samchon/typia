import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_assertReturnCustom_ObjectHttpUndefindable =
  _test_functional_assertReturn(CustomGuardError)("ObjectHttpUndefindable")(
    ObjectHttpUndefindable,
  )((p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
