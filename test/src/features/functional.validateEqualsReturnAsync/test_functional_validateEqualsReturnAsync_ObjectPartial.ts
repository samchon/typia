import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateEqualsReturnAsync_ObjectPartial =
  _test_functional_validateEqualsReturnAsync("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
      typia.functional.validateEqualsReturn(p),
  );
