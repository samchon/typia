import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateEqualsReturn_ObjectUndefined = (): void =>
  _test_functional_validateEqualsReturn("ObjectUndefined")(ObjectUndefined)(
    (p: (input: ObjectUndefined) => ObjectUndefined) =>
      typia.functional.validateEqualsReturn(p),
  );
