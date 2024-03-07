import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateReturnAsync_ObjectUndefined =
  _test_functional_validateReturnAsync("ObjectUndefined")(ObjectUndefined)(
    (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
      typia.functional.validateReturn(p),
  );
