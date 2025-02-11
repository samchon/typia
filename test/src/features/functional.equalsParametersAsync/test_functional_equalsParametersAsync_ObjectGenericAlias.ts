import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_equalsParametersAsync_ObjectGenericAlias = _test_functional_equalsParametersAsync(
  "ObjectGenericAlias"
)(ObjectGenericAlias)(
  (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
    typia.functional.equalsParameters(p),
)