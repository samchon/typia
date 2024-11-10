import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_json_schemas_v3_1_ObjectGenericArray = _test_json_schemas({
  version: "3.1",
  name: "ObjectGenericArray",
})(typia.json.schemas<[ObjectGenericArray], "3.1">());
