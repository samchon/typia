import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_assertReturn_ObjectIntersection = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => ObjectIntersection) =>
    typia.functional.assertReturn(p),
  );
