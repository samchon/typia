import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_equalsReturnAsync_ObjectGenericArray =
  _test_functional_equalsReturnAsync("ObjectGenericArray")(ObjectGenericArray)(
    (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
      typia.functional.equalsReturn(p),
  );
