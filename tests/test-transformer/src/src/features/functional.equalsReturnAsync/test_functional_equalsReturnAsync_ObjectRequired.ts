import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_equalsReturnAsync_ObjectRequired = (): Promise<void> => _test_functional_equalsReturnAsync(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.equalsReturn(p),
)