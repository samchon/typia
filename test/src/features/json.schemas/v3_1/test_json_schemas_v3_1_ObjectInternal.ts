import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_json_schemas_v3_1_ObjectInternal = _test_json_schemas({
  version: "3.1",
  name: "ObjectInternal",
})(typia.json.schemas<[ObjectInternal], "3.1">());
