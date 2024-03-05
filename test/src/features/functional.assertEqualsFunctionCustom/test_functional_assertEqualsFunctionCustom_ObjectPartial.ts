import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertEqualsFunctionCustom_ObjectPartial =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => ObjectPartial) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
