import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_validateFunctionAsync_ObjectPrimitive =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ObjectPrimitive")(ObjectPrimitive)(
      (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
        typia.functional.validateFunction(p),
    );
