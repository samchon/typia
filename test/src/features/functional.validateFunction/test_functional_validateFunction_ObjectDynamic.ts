import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_validateFunction_ObjectDynamic = (): void => _test_functional_validateFunction(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => ObjectDynamic) => typia.functional.validateFunction(p),
)