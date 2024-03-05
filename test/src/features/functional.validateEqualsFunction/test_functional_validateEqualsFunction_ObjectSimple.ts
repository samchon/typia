import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_validateEqualsFunction_ObjectSimple =
  _test_functional_validateEqualsFunction("ObjectSimple")(ObjectSimple)(
    (p: (input: ObjectSimple) => ObjectSimple) =>
      typia.functional.validateEqualsFunction(p),
  );
