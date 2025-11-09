import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_functional_equalsParametersAsync_ObjectHttpNullable = (): Promise<void> => _test_functional_equalsParametersAsync(
  "ObjectHttpNullable"
)(ObjectHttpNullable)(
  (p: (input: ObjectHttpNullable) => Promise<ObjectHttpNullable>) =>
    typia.functional.equalsParameters(p),
)