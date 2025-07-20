import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_isParametersAsync_ObjectPrimitive =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ObjectPrimitive")(ObjectPrimitive)(
      (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
        typia.functional.isParameters(p),
    );
