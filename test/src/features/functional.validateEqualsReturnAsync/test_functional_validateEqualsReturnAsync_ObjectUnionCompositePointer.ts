import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_validateEqualsReturnAsync_ObjectUnionCompositePointer = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ObjectUnionCompositePointer"
)(ObjectUnionCompositePointer)(
  (p: (input: ObjectUnionCompositePointer) => Promise<ObjectUnionCompositePointer>) =>
    typia.functional.validateEqualsReturn(p),
)