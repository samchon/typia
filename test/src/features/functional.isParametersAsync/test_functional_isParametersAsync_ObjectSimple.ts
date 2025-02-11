import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_isParametersAsync_ObjectSimple = _test_functional_isParametersAsync(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.isParameters(p),
)