import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_assertEqualsFunctionCustom_ObjectInternal =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectInternal")(
    ObjectInternal,
  )((p: (input: ObjectInternal) => ObjectInternal) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
