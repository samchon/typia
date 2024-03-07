import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_validateEqualsReturnAsync_ObjectGenericArray =
  _test_functional_validateEqualsReturnAsync("ObjectGenericArray")(
    ObjectGenericArray,
  )((p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
    typia.functional.validateEqualsReturn(p),
  );
