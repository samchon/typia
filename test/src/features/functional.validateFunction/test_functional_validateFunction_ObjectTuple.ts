import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_functional_validateFunction_ObjectTuple = (): void =>
  _test_functional_validateFunction("ObjectTuple")(ObjectTuple)(
    (p: (input: ObjectTuple) => ObjectTuple) =>
      typia.functional.validateFunction(p),
  );
