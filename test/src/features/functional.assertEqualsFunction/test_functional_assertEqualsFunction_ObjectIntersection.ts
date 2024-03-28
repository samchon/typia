import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertEqualsFunction_ObjectIntersection =
  _test_functional_assertEqualsFunction(TypeGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => ObjectIntersection) =>
    typia.functional.assertEqualsFunction(p),
  );
