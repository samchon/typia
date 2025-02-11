import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_functional_equalsParametersAsync_ObjectClosure = _test_functional_equalsParametersAsync(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => Promise<ObjectClosure>) =>
    typia.functional.equalsParameters(p),
)