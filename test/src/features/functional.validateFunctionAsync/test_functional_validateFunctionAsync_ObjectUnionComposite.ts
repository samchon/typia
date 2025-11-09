import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_validateFunctionAsync_ObjectUnionComposite = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
    typia.functional.validateFunction(p),
)