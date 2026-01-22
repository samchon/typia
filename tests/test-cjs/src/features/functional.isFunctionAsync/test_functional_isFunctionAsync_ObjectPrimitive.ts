import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_isFunctionAsync_ObjectPrimitive =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ObjectPrimitive")(ObjectPrimitive)(
      (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
        typia.functional.isFunction(p),
    );
