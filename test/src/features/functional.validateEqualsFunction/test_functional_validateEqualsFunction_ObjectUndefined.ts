import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateEqualsFunction_ObjectUndefined =
  _test_functional_validateEqualsFunction("ObjectUndefined")(ObjectUndefined)(
    (p: (input: ObjectUndefined) => ObjectUndefined) =>
      typia.functional.validateEqualsFunction(p),
  );
