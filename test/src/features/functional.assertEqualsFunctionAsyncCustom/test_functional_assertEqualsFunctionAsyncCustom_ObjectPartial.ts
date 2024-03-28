import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectPartial =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
