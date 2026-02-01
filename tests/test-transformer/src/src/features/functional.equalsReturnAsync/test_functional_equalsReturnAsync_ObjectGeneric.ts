import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_functional_equalsReturnAsync_ObjectGeneric = (): Promise<void> => _test_functional_equalsReturnAsync(
  "ObjectGeneric"
)(ObjectGeneric)(
  (p: (input: ObjectGeneric) => Promise<ObjectGeneric>) =>
    typia.functional.equalsReturn(p),
)