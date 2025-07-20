import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertEqualsReturn_ObjectIntersection = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => ObjectIntersection) =>
    typia.functional.assertEqualsReturn(p),
  );
