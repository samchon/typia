import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_assertParse_ObjectLiteralType = _test_json_assertParse(
  TypeGuardError,
)("ObjectLiteralType")<ObjectLiteralType>(ObjectLiteralType)((input) =>
  typia.json.assertParse<ObjectLiteralType>(input),
);
