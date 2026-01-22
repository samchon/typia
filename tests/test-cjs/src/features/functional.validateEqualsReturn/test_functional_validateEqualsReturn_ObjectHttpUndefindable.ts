import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_validateEqualsReturn_ObjectHttpUndefindable =
  (): void =>
    _test_functional_validateEqualsReturn("ObjectHttpUndefindable")(
      ObjectHttpUndefindable,
    )((p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
      typia.functional.validateEqualsReturn(p),
    );
