import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_isReturnAsync_ObjectRequired = (): Promise<void> =>
  _test_functional_isReturnAsync("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
      typia.functional.isReturn(p),
  );
