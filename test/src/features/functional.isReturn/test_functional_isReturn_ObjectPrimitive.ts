import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_isReturn_ObjectPrimitive =
  _test_functional_isReturn("ObjectPrimitive")(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.isReturn(p),
  );
