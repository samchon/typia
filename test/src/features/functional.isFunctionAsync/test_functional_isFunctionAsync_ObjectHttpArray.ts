import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_isFunctionAsync_ObjectHttpArray = (): Promise<void> => _test_functional_isFunctionAsync(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.isFunction(p),
)