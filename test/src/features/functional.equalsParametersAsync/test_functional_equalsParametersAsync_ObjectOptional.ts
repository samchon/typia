import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_equalsParametersAsync_ObjectOptional = (): Promise<void> => _test_functional_equalsParametersAsync(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.equalsParameters(p),
)