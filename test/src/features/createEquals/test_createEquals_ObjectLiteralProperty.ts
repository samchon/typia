import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_createEquals_ObjectLiteralProperty = (): void =>
  _test_equals("ObjectLiteralProperty")<ObjectLiteralProperty>(
    ObjectLiteralProperty,
  )(typia.createEquals<ObjectLiteralProperty>());
