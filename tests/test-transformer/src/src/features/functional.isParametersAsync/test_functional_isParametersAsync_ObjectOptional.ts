import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_isParametersAsync_ObjectOptional = (): Promise<void> => _test_functional_isParametersAsync(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.isParameters(p),
)