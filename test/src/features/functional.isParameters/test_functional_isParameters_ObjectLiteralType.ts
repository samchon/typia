import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_functional_isParameters_ObjectLiteralType = _test_functional_isParameters(
  "ObjectLiteralType"
)(ObjectLiteralType)(
  (p: (input: ObjectLiteralType) => ObjectLiteralType) => typia.functional.isParameters(p),
)