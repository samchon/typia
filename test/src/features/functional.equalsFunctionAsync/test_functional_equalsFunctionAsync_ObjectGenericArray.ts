import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_equalsFunctionAsync_ObjectGenericArray =
  _test_functional_equalsFunctionAsync("ObjectGenericArray")(
    ObjectGenericArray,
  )((p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
    typia.functional.equalsFunction(p),
  );
