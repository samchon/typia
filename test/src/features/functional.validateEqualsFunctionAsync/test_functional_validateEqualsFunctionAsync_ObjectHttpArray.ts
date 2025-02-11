import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_validateEqualsFunctionAsync_ObjectHttpArray =
  _test_functional_validateEqualsFunctionAsync("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.validateEqualsFunction(p),
  );
