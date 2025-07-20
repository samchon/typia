import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_assertEqualsReturnCustom_ObjectHttpNullable =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ObjectHttpNullable")(
      ObjectHttpNullable,
    )((p: (input: ObjectHttpNullable) => ObjectHttpNullable) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
