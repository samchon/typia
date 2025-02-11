import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateEqualsFunction_ObjectIntersection =
  _test_functional_validateEqualsFunction("ObjectIntersection")(
    ObjectIntersection,
  )((p: (input: ObjectIntersection) => ObjectIntersection) =>
    typia.functional.validateEqualsFunction(p),
  );
