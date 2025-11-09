import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_functional_validateEqualsParametersAsync_ObjectPrimitive = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ObjectPrimitive"
)(ObjectPrimitive)(
  (p: (input: ObjectPrimitive) => Promise<ObjectPrimitive>) =>
    typia.functional.validateEqualsParameters(p),
)