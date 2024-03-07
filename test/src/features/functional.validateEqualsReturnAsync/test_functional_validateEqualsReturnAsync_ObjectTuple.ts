import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateEqualsReturnAsync_ObjectTuple =
  _test_functional_validateEqualsReturnAsync("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => Promise<ObjectTuple>) =>
      typia.functional.validateEqualsReturn(p),
  );
