import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_equalsReturnAsync_ObjectUndefined = (): Promise<void> => _test_functional_equalsReturnAsync(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.equalsReturn(p),
)