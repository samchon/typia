import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_standardSchema_createValidate_ObjectLiteralType = (): void =>
  _test_standardSchema_validate("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )(typia.createValidate<ObjectLiteralType>());
