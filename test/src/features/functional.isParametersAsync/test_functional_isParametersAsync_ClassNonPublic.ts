import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_isParametersAsync_ClassNonPublic =
  _test_functional_isParametersAsync("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
      typia.functional.isParameters(p),
  );
