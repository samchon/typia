import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_json_schemas_v3_0_ObjectDate = _test_json_schemas({
  version: "3.0",
  name: "ObjectDate",
})(typia.json.schemas<[ObjectDate], "3.0">());
