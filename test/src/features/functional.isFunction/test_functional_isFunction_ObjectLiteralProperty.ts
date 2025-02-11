import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_functional_isFunction_ObjectLiteralProperty = _test_functional_isFunction(
  "ObjectLiteralProperty"
)(ObjectLiteralProperty)(
  (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) => typia.functional.isFunction(p),
)