import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_schemas_v3_1_ObjectJsonTag = _test_json_schemas({
  version: "3.1",
  name: "ObjectJsonTag",
})(typia.json.schemas<[ObjectJsonTag], "3.1">());
