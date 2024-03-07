import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateEqualsReturnAsync_ObjectSimple =
  _test_functional_validateEqualsReturnAsync("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
      typia.functional.validateEqualsReturn(p),
  );
