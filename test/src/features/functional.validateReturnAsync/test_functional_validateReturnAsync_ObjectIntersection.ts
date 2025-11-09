import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_validateReturnAsync_ObjectIntersection =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ObjectIntersection")(
      ObjectIntersection,
    )((p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      typia.functional.validateReturn(p),
    );
