import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_functional_validateEqualsFunction_ObjectHttpUndefindable =
  (): void =>
    _test_functional_validateEqualsFunction("ObjectHttpUndefindable")(
      ObjectHttpUndefindable,
    )((p: (input: ObjectHttpUndefindable) => ObjectHttpUndefindable) =>
      typia.functional.validateEqualsFunction(p),
    );
