import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateReturnAsync_ObjectOptional =
  _test_functional_validateReturnAsync("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
      typia.functional.validateReturn(p),
  );
