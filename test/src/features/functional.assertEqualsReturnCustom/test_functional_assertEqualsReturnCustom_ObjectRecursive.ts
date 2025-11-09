import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertEqualsReturnCustom_ObjectRecursive =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("ObjectRecursive")(
      ObjectRecursive,
    )((p: (input: ObjectRecursive) => ObjectRecursive) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
