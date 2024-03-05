import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_validateParameters_ClassGetter =
  _test_functional_validateParameters("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.validateParameters(p),
  );
