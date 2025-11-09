import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_createValidateParse_ObjectLiteralType = (): void =>
  _test_json_validateParse("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )(typia.json.createValidateParse<ObjectLiteralType>());
