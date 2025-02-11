import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_functional_isParametersAsync_ObjectRequired = _test_functional_isParametersAsync(
  "ObjectRequired"
)(ObjectRequired)(
  (p: (input: ObjectRequired) => Promise<ObjectRequired>) =>
    typia.functional.isParameters(p),
)