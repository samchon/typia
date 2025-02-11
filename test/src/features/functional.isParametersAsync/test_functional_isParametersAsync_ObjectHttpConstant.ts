import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_functional_isParametersAsync_ObjectHttpConstant = _test_functional_isParametersAsync(
  "ObjectHttpConstant"
)(ObjectHttpConstant)(
  (p: (input: ObjectHttpConstant) => Promise<ObjectHttpConstant>) =>
    typia.functional.isParameters(p),
)