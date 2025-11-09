import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_assertEqualsReturnCustom_ObjectUndefined =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ObjectUndefined")(
      ObjectUndefined,
    )((p: (input: ObjectUndefined) => ObjectUndefined) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
