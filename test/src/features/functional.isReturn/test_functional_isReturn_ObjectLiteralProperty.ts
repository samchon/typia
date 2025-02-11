import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_isReturn_ObjectLiteralProperty = _test_functional_isReturn(
  "ObjectLiteralProperty"
)(ObjectLiteralProperty)(
  (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) => typia.functional.isReturn(p),
)