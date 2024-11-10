import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_json_schemas_v3_1_ObjectLiteralProperty = _test_json_schemas({
  version: "3.1",
  name: "ObjectLiteralProperty",
})(typia.json.schemas<[ObjectLiteralProperty], "3.1">());
