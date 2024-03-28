import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertEqualsParameters_ObjectIntersection =
  _test_functional_assertEqualsParameters(TypeGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => ObjectIntersection) =>
    typia.functional.assertEqualsParameters(p),
  );
