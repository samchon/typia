import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateEqualsReturnAsync_ObjectRequired =
  _test_functional_validateEqualsReturnAsync("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
      typia.functional.validateEqualsReturn(p),
  );
