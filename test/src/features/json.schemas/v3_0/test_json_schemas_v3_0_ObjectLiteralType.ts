import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_json_schemas_v3_0_ObjectLiteralType = _test_json_schemas({
  version: "3.0",
  name: "ObjectLiteralType",
})(typia.json.schemas<[ObjectLiteralType], "3.0">());
