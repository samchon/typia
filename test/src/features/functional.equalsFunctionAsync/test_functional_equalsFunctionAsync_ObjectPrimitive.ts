import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_equalsFunctionAsync_ObjectPrimitive =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ObjectPrimitive")(ObjectPrimitive)(
      (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
        typia.functional.equalsFunction(p),
    );
