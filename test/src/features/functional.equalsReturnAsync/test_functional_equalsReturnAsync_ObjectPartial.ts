import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_equalsReturnAsync_ObjectPartial = _test_functional_equalsReturnAsync(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.equalsReturn(p),
)