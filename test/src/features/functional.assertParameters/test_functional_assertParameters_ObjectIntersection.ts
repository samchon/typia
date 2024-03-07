import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectIntersection =
  _test_functional_assertParameters(TypeGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => ObjectIntersection) =>
    typia.functional.assertParameters(p),
  );
