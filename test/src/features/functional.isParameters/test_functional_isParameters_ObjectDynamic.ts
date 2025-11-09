import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_functional_isParameters_ObjectDynamic = (): void => _test_functional_isParameters(
  "ObjectDynamic"
)(ObjectDynamic)(
  (p: (input: ObjectDynamic) => ObjectDynamic) => typia.functional.isParameters(p),
)