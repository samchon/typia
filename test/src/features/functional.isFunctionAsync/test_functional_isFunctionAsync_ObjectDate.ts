import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_isFunctionAsync_ObjectDate = (): Promise<void> =>
  _test_functional_isFunctionAsync("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => Promise<ObjectDate>) =>
      typia.functional.isFunction(p),
  );
