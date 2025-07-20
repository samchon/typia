import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_isParameters_ObjectIntersection = (): void =>
  _test_functional_isParameters("ObjectIntersection")(ObjectIntersection)(
    (p: (input: ObjectIntersection) => ObjectIntersection) =>
      typia.functional.isParameters(p),
  );
