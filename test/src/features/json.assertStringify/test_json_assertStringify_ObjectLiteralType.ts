import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_assertStringify_ObjectLiteralType = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)((input) =>
    typia.json.assertStringify<ObjectLiteralType>(input),
  );
