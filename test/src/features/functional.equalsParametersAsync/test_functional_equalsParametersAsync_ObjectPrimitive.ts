import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_equalsParametersAsync_ObjectPrimitive = _test_functional_equalsParametersAsync(
  "ObjectPrimitive"
)(ObjectPrimitive)(
  (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
    typia.functional.equalsParameters(p),
)