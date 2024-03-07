import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_validateEqualsParametersAsync_ObjectHttpArray =
  _test_functional_validateEqualsParametersAsync("ObjectHttpArray")(
    ObjectHttpArray,
  )((p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.validateEqualsParameters(p),
  );
