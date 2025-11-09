import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_equalsFunction_ObjectPrimitive = (): void =>
  _test_functional_equalsFunction("ObjectPrimitive")(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.equalsFunction(p),
  );
