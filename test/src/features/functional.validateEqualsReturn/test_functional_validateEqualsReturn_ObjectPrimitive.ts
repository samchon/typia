import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_validateEqualsReturn_ObjectPrimitive = (): void =>
  _test_functional_validateEqualsReturn("ObjectPrimitive")(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      typia.functional.validateEqualsReturn(p),
  );
