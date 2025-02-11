import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_isReturnAsync_ClassNonPublic =
  _test_functional_isReturnAsync("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
      typia.functional.isReturn(p),
  );
