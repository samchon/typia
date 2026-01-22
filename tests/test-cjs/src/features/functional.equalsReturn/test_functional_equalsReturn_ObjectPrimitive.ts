import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_equalsReturn_ObjectPrimitive = (): void =>
  _test_functional_equalsReturn("ObjectPrimitive")(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.equalsReturn(p),
  );
