import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_validateReturnAsync_ObjectHttpArray =
  _test_functional_validateReturnAsync("ObjectHttpArray")(ObjectHttpArray)(
    (p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
      typia.functional.validateReturn(p),
  );
