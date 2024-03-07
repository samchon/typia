import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_validateReturnAsync_ObjectDescription =
  _test_functional_validateReturnAsync("ObjectDescription")(ObjectDescription)(
    (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      typia.functional.validateReturn(p),
  );
