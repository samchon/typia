import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_equalsReturnAsync_ObjectIntersection =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ObjectIntersection")(
      ObjectIntersection,
    )((p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      typia.functional.equalsReturn(p),
    );
