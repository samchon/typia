import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_functional_isParameters_ClassMethod =
  _test_functional_isParameters("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      typia.functional.isParameters(p),
  );
