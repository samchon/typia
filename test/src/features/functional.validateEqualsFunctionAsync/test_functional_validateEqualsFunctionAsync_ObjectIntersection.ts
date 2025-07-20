import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateEqualsFunctionAsync_ObjectIntersection =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ObjectIntersection")(
      ObjectIntersection,
    )((p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      typia.functional.validateEqualsFunction(p),
    );
