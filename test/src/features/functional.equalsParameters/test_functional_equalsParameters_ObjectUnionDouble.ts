import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_functional_equalsParameters_ObjectUnionDouble = _test_functional_equalsParameters(
  "ObjectUnionDouble"
)(ObjectUnionDouble)(
  (p: (input: ObjectUnionDouble) => ObjectUnionDouble) => typia.functional.equalsParameters(p),
)