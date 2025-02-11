import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_functional_equalsParameters_ObjectOptional = _test_functional_equalsParameters(
  "ObjectOptional"
)(ObjectOptional)(
  (p: (input: ObjectOptional) => ObjectOptional) => typia.functional.equalsParameters(p),
)