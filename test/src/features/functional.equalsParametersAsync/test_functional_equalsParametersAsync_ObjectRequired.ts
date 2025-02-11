import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_equalsParametersAsync_ObjectRequired = _test_functional_equalsParametersAsync(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.equalsParameters(p),
)