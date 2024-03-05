import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_validateEqualsReturn_ObjectInternal =
  _test_functional_validateEqualsReturn("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => ObjectInternal) =>
      typia.functional.validateEqualsReturn(p),
  );
