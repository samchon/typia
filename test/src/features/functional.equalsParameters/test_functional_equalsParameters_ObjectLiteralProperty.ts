import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_equalsParameters_ObjectLiteralProperty = _test_functional_equalsParameters(
  "ObjectLiteralProperty"
)(ObjectLiteralProperty)(
  (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) => typia.functional.equalsParameters(p),
)