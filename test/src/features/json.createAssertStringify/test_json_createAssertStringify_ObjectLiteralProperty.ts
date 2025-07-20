import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_createAssertStringify_ObjectLiteralProperty = (): void =>
  _test_json_assertStringify(TypeGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.json.createAssertStringify<ObjectLiteralProperty>(),
  );
