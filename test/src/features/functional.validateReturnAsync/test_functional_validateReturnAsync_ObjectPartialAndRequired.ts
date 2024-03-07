import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_functional_validateReturnAsync_ObjectPartialAndRequired =
  _test_functional_validateReturnAsync("ObjectPartialAndRequired")(
    ObjectPartialAndRequired,
  )(
    (
      p: (input: ObjectPartialAndRequired) => Promise<ObjectPartialAndRequired>,
    ) => typia.functional.validateReturn(p),
  );
