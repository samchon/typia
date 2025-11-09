import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_functional_validateEqualsReturnAsync_ObjectUnionComposite = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ObjectUnionComposite"
)(ObjectUnionComposite)(
  (p: (input: ObjectUnionComposite) => Promise<ObjectUnionComposite>) =>
    typia.functional.validateEqualsReturn(p),
)