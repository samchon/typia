import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_functional_equalsReturnAsync_ObjectGenericUnion = _test_functional_equalsReturnAsync(
  "ObjectGenericUnion"
)(ObjectGenericUnion)(
  (p: (input: ObjectGenericUnion) => Promise<ObjectGenericUnion>) =>
    typia.functional.equalsReturn(p),
)