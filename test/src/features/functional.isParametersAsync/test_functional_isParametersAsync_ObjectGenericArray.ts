import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_isParametersAsync_ObjectGenericArray = _test_functional_isParametersAsync(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => Promise<ObjectGenericArray>) =>
    typia.functional.isParameters(p),
)