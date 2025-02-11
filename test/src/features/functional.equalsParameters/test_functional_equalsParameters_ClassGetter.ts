import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_functional_equalsParameters_ClassGetter =
  _test_functional_equalsParameters("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      typia.functional.equalsParameters(p),
  );
