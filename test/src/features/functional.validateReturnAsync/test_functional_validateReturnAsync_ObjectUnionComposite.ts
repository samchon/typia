import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_validateReturnAsync_ObjectUnionComposite = (): Promise<void> => _test_functional_validateReturnAsync(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
    typia.functional.validateReturn(p),
)