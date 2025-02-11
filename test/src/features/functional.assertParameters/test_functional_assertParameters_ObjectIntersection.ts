import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertParameters_ObjectIntersection =
  _test_functional_assertParameters(TypeGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => ObjectIntersection) =>
    typia.functional.assertParameters(p),
  );
