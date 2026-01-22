import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_validateEqualsReturn_ObjectHttpArray = (): void =>
  _test_functional_validateEqualsReturn("ObjectHttpArray")(ObjectHttpArray)(
    (p: (input: ObjectHttpArray) => ObjectHttpArray) =>
      typia.functional.validateEqualsReturn(p),
  );
