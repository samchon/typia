import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_assertEqualsReturnCustom_ObjectDescription =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ObjectDescription")(
      ObjectDescription,
    )((p: (input: ObjectDescription) => ObjectDescription) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
