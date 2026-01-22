import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_validateFunctionAsync_ObjectPartialAndRequired =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ObjectPartialAndRequired")(
      ObjectPartialAndRequired,
    )(
      (
        p: (
          input: ObjectPartialAndRequired,
        ) => Promise<ObjectPartialAndRequired>,
      ) => typia.functional.validateFunction(p),
    );
