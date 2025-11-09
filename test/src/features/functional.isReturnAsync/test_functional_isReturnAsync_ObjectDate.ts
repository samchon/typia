import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_functional_isReturnAsync_ObjectDate = (): Promise<void> =>
  _test_functional_isReturnAsync("ObjectDate")(ObjectDate)(
    (p: (input: ObjectDate) => Promise<ObjectDate>) =>
      typia.functional.isReturn(p),
  );
