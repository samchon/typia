import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_functional_equalsParametersAsync_ObjectDescription = _test_functional_equalsParametersAsync(
  "ObjectDescription"
)(ObjectDescription)(
  (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
    typia.functional.equalsParameters(p),
)