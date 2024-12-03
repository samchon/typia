import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_schemas_v3_1_ObjectDynamic = _test_json_schemas({
  version: "3.1",
  name: "ObjectDynamic",
})(typia.json.schemas<[ObjectDynamic], "3.1">());
