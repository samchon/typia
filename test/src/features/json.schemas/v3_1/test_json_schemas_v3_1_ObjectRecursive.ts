import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_json_schemas_v3_1_ObjectRecursive = _test_json_schemas({
  version: "3.1",
  name: "ObjectRecursive",
})(typia.json.schemas<[ObjectRecursive], "3.1">());
