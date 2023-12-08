import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_json_stringify_ObjectLiteralProperty = _test_json_stringify(
  "ObjectLiteralProperty",
)<ObjectLiteralProperty>(ObjectLiteralProperty)((input) =>
  typia.json.stringify<ObjectLiteralProperty>(input),
);
