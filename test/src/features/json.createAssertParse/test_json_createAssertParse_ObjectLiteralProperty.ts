import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_ObjectLiteralProperty =
  _test_json_assertParse(TypeGuardError)(
    "ObjectLiteralProperty",
  )<ObjectLiteralProperty>(ObjectLiteralProperty)(
    typia.json.createAssertParse<ObjectLiteralProperty>(),
  );
