import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_isParametersAsync_ObjectDate =
  _test_functional_isParametersAsync("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => Promise<ObjectDate>) =>
      typia.functional.isParameters(p),
  );
