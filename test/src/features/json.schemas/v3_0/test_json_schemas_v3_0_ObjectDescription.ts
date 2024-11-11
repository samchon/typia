import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectDescription } from "../../../structures/ObjectDescription";

export const test_json_schemas_v3_0_ObjectDescription = _test_json_schemas({
  version: "3.0",
  name: "ObjectDescription",
})(typia.json.schemas<[ObjectDescription], "3.0">());
