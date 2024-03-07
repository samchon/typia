import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_functional_validateReturnAsync_ObjectHttpTypeTag =
  _test_functional_validateReturnAsync("ObjectHttpTypeTag")(ObjectHttpTypeTag)(
    (p: (input: ObjectHttpTypeTag) => Promise<ObjectHttpTypeTag>) =>
      typia.functional.validateReturn(p),
  );
