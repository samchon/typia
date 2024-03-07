import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateReturnAsync_ObjectRequired =
  _test_functional_validateReturnAsync("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
      typia.functional.validateReturn(p),
  );
