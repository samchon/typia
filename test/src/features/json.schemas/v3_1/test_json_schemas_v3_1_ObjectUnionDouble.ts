import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_json_schemas_v3_1_ObjectUnionDouble = _test_json_schemas({
  version: "3.1",
  name: "ObjectUnionDouble",
})(typia.json.schemas<[ObjectUnionDouble], "3.1">());
