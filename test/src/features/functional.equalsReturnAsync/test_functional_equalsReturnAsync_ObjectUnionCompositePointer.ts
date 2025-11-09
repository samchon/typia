import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_functional_equalsReturnAsync_ObjectUnionCompositePointer = (): Promise<void> => _test_functional_equalsReturnAsync(
  "ObjectUnionCompositePointer"
)(ObjectUnionCompositePointer)(
  (p: (input: ObjectUnionCompositePointer) => Promise<ObjectUnionCompositePointer>) =>
    typia.functional.equalsReturn(p),
)