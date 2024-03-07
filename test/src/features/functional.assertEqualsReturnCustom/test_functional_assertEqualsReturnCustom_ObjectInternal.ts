import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectInternal } from "../../structures/ObjectInternal";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectInternal =
  _test_functional_assertEqualsReturn(CustomGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
