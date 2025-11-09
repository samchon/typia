import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_functional_isParametersAsync_ObjectHttpArray = (): Promise<void> => _test_functional_isParametersAsync(
  "ObjectHttpArray"
)(ObjectHttpArray)(
  (p: (input: ObjectHttpArray) => Promise<ObjectHttpArray>) =>
    typia.functional.isParameters(p),
)