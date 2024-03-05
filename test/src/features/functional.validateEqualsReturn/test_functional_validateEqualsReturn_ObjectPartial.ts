import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateEqualsReturn_ObjectPartial =
  _test_functional_validateEqualsReturn("ObjectPartial")(ObjectPartial)(
    (p: (input: ObjectPartial) => ObjectPartial) =>
      typia.functional.validateEqualsReturn(p),
  );
