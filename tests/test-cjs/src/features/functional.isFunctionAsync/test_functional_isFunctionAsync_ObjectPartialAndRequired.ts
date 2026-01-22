import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_isFunctionAsync_ObjectPartialAndRequired =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ObjectPartialAndRequired")(
      ObjectPartialAndRequired,
    )(
      (
        p: (
          input: ObjectPartialAndRequired,
        ) => Promise<ObjectPartialAndRequired>,
      ) => typia.functional.isFunction(p),
    );
