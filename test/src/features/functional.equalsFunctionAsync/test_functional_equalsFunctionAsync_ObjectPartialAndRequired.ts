import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_equalsFunctionAsync_ObjectPartialAndRequired =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectPartialAndRequired")(
      ObjectPartialAndRequired,
    )(
      (
        p: (
          input: ObjectPartialAndRequired,
        ) => Promise<ObjectPartialAndRequired>,
      ) => typia.functional.equalsFunction(p),
    );
