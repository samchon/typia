import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_functional_equalsParametersAsync_ObjectSimple = (): Promise<void> => _test_functional_equalsParametersAsync(
  "ObjectSimple"
)(ObjectSimple)(
  (p: (input: ObjectSimple) => Promise<ObjectSimple>) =>
    typia.functional.equalsParameters(p),
)