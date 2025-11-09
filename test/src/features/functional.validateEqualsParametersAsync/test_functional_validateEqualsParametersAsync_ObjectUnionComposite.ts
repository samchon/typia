import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_validateEqualsParametersAsync_ObjectUnionComposite = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
    typia.functional.validateEqualsParameters(p),
)