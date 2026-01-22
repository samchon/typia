import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_isReturn_ObjectIntersection = (): void =>
  _test_functional_isReturn("ObjectIntersection")(ObjectIntersection)(
    (p: (input: ObjectIntersection) => ObjectIntersection) =>
      typia.functional.isReturn(p),
  );
