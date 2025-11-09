import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_validateEqualsFunctionAsync_ObjectPartial = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.validateEqualsFunction(p),
)