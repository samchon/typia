import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_equalsReturnAsync_ObjectPrimitive =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ObjectPrimitive")(ObjectPrimitive)(
      (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
        typia.functional.equalsReturn(p),
    );
