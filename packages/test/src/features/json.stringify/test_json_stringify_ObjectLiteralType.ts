import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_stringify_ObjectLiteralType = _test_json_stringify(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)((input) =>
  typia.json.stringify<ObjectLiteralType>(input),
);
