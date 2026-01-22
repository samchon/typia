import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateReturn_ObjectIntersection = (): void =>
  _test_functional_validateReturn("ObjectIntersection")(ObjectIntersection)(
    (p: (input: ObjectIntersection) => ObjectIntersection) =>
      typia.functional.validateReturn(p),
  );
