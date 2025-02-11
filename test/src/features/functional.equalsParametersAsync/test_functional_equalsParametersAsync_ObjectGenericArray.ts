import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_equalsParametersAsync_ObjectGenericArray = _test_functional_equalsParametersAsync(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
    typia.functional.equalsParameters(p),
)