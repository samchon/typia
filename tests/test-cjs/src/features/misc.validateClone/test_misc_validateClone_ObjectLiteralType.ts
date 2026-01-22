import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_misc_validateClone_ObjectLiteralType = (): void =>
  _test_misc_validateClone("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )((input) => typia.misc.validateClone<ObjectLiteralType>(input));
