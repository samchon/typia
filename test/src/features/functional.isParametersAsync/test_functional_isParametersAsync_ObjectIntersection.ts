import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectIntersection } from "../../structures/ObjectIntersection";

export const test_functional_isParametersAsync_ObjectIntersection =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ObjectIntersection")(
      ObjectIntersection,
    )((p: (input: ObjectIntersection) => Promise<ObjectIntersection>) =>
      typia.functional.isParameters(p),
    );
