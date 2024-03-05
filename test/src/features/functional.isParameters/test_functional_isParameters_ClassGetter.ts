import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_isParameters_ClassGetter =
  _test_functional_isParameters("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.isParameters(p),
  );
