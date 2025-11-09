import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_isFunctionAsync_ObjectInternal =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ObjectInternal")(ObjectInternal)(
      (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
        typia.functional.isFunction(p),
    );
