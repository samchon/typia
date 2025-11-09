import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_equalsReturn_ObjectIntersection = (): void =>
  _test_functional_equalsReturn("ObjectIntersection")(ObjectIntersection)(
    (p: (input: ObjectIntersection) => ObjectIntersection) =>
      typia.functional.equalsReturn(p),
  );
