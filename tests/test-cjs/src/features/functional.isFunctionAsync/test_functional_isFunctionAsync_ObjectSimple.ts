import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_isFunctionAsync_ObjectSimple = (): Promise<void> =>
  _test_functional_isFunctionAsync("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
      typia.functional.isFunction(p),
  );
