import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_validateFunction_ObjectPrimitive =
  _test_functional_validateFunction("ObjectPrimitive")(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.validateFunction(p),
  );
