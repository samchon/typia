import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_assertEqualsReturnCustom_ObjectHttpArray =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ObjectHttpArray")(
      ObjectHttpArray,
    )((p: (input: ObjectHttpArray) => ObjectHttpArray) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
