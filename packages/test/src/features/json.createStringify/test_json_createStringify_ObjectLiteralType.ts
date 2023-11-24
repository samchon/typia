import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_json_createStringify_ObjectLiteralType = _test_json_stringify(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)(
  typia.json.createStringify<ObjectLiteralType>(),
);
