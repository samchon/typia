import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsReturnCustom_ObjectPartial =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ObjectPartial")(
      ObjectPartial,
    )((p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
