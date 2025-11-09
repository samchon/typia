import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_isFunctionAsync_ObjectPartial = (): Promise<void> => _test_functional_isFunctionAsync(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.isFunction(p),
)