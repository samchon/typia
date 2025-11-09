import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_validateEqualsParametersAsync_ObjectUnionDouble = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ObjectUnionDouble"
)(ObjectUnionDouble)(
  (p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
    typia.functional.validateEqualsParameters(p),
)