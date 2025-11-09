import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateEqualsReturn_ObjectSimple = (): void =>
  _test_functional_validateEqualsReturn("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      typia.functional.validateEqualsReturn(p),
  );
