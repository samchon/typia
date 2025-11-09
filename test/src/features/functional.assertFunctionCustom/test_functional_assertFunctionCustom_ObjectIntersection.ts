import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertFunctionCustom_ObjectIntersection =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("ObjectIntersection")(
      ObjectIntersection,
    )((p: (input: ObjectIntersection) => ObjectIntersection) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
