import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectLiteralType =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectLiteralType",
  )<ObjectLiteralType>(ObjectLiteralType)((input) =>
    typia.json.assertStringify<ObjectLiteralType>(input),
  );
