import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ObjectIntersection =
  _test_functional_assertEqualsFunction(CustomGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => ObjectIntersection) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
