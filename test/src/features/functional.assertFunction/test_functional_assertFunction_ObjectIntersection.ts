import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertFunction_ObjectIntersection =
  _test_functional_assertFunction(TypeGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => ObjectIntersection) =>
    typia.functional.assertFunction(p),
  );
