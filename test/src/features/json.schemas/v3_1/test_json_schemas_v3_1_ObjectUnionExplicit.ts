import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectUnionExplicit } from "../../../structures/ObjectUnionExplicit";

export const test_json_schemas_v3_1_ObjectUnionExplicit = _test_json_schemas({
  version: "3.1",
  name: "ObjectUnionExplicit",
})(typia.json.schemas<[ObjectUnionExplicit], "3.1">());
