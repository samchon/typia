import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_validateEqualsReturn_ObjectRequired = (): void =>
  _test_functional_validateEqualsReturn("ObjectRequired")(ObjectRequired)(
    (p: (input: ObjectRequired) => ObjectRequired) =>
      typia.functional.validateEqualsReturn(p),
  );
