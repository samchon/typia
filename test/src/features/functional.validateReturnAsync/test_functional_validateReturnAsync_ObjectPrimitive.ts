import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_validateReturnAsync_ObjectPrimitive =
  _test_functional_validateReturnAsync("ObjectPrimitive")(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
      typia.functional.validateReturn(p),
  );
