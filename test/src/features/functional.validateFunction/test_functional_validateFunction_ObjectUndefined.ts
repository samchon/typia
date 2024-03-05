import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_validateFunction_ObjectUndefined =
  _test_functional_validateFunction("ObjectUndefined")(ObjectUndefined)(
    (p: (input: ObjectUndefined) => ObjectUndefined) =>
      typia.functional.validateFunction(p),
  );
