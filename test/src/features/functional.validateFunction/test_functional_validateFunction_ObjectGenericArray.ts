import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_validateFunction_ObjectGenericArray =
  _test_functional_validateFunction("ObjectGenericArray")(ObjectGenericArray)(
    (p: (input: ObjectGenericArray) => ObjectGenericArray) =>
      typia.functional.validateFunction(p),
  );
