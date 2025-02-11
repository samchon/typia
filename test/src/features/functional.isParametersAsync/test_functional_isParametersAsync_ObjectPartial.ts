import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_functional_isParametersAsync_ObjectPartial = _test_functional_isParametersAsync(
  "ObjectPartial"
)(ObjectPartial)(
  (p: (input: ObjectPartial) => Promise<ObjectPartial>) =>
    typia.functional.isParameters(p),
)