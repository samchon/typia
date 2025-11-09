import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_validateEqualsFunction_ObjectPrimitive =
  (): void =>
    _test_functional_validateEqualsFunction("ObjectPrimitive")(ObjectPrimitive)(
      (p: (input: ObjectPrimitive) => ObjectPrimitive) =>
        typia.functional.validateEqualsFunction(p),
    );
