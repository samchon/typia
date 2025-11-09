import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_misc_isClone_ObjectLiteralProperty = (): void =>
  _test_misc_isClone("ObjectLiteralProperty")<ObjectLiteralProperty>(
    ObjectLiteralProperty,
  )((input) => typia.misc.isClone<ObjectLiteralProperty>(input));
