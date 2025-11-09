import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateFunction_ObjectIntersection = (): void =>
  _test_functional_validateFunction("ObjectIntersection")(ObjectIntersection)(
    (p: (input: ObjectIntersection) => ObjectIntersection) =>
      typia.functional.validateFunction(p),
  );
