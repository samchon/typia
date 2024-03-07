import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_ObjectLiteralProperty =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
    typia.json.assertStringify<ObjectLiteralProperty>(input),
  );
