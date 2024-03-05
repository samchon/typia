import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateParameters_ObjectIntersection =
  _test_functional_validateParameters("ObjectIntersection")(ObjectIntersection)(
    (p: (input: ObjectIntersection) => ObjectIntersection) =>
      typia.functional.validateParameters(p),
  );
