import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_assertFunctionCustom_ObjectPartial =
  _test_functional_assertFunction(CustomGuardError)("ObjectPartial")(
    ObjectPartial,
  )((p: (input: ObjectPartial) => ObjectPartial) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
