import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_functional_equalsParametersAsync_ObjectUndefined = (): Promise<void> => _test_functional_equalsParametersAsync(
  "ObjectUndefined"
)(ObjectUndefined)(
  (p: (input: ObjectUndefined) => Promise<ObjectUndefined>) =>
    typia.functional.equalsParameters(p),
)