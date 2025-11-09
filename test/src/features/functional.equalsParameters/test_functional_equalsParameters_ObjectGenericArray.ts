import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_functional_equalsParameters_ObjectGenericArray = (): void => _test_functional_equalsParameters(
  "ObjectGenericArray"
)(ObjectGenericArray)(
  (p: (input: ObjectGenericArray) => ObjectGenericArray) => typia.functional.equalsParameters(p),
)