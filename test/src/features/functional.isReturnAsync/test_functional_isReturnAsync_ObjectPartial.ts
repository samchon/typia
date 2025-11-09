import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_isReturnAsync_ObjectPartial = (): Promise<void> => _test_functional_isReturnAsync(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.isReturn(p),
)