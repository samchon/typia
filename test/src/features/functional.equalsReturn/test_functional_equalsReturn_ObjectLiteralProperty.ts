import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_equalsReturn_ObjectLiteralProperty = (): void => _test_functional_equalsReturn(
  "ObjectLiteralProperty"
)(ObjectLiteralProperty)(
  (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) => typia.functional.equalsReturn(p),
)