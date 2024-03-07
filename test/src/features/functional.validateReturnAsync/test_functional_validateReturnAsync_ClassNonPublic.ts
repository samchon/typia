import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_validateReturnAsync_ClassNonPublic =
  _test_functional_validateReturnAsync("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
      typia.functional.validateReturn(p),
  );
