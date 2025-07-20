import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_equalsFunction_ObjectGenericArray = (): void =>
  _test_functional_equalsFunction("ObjectGenericArray")(ObjectGenericArray)(
    (p: (input: ObjectGenericArray) => ObjectGenericArray) =>
      typia.functional.equalsFunction(p),
  );
