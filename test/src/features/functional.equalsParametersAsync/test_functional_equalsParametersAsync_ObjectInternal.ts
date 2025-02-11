import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_functional_equalsParametersAsync_ObjectInternal = _test_functional_equalsParametersAsync(
  "ObjectInternal"
)(ObjectInternal)(
  (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
    typia.functional.equalsParameters(p),
)