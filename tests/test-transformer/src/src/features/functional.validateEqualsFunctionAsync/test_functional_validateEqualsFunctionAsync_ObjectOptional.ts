import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_validateEqualsFunctionAsync_ObjectOptional = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
    typia.functional.validateEqualsFunction(p),
)