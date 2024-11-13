import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_json_schemas_v3_1_ObjectUnionNonPredictable =
  _test_json_schemas({
    version: "3.1",
    name: "ObjectUnionNonPredictable",
  })(typia.json.schemas<[ObjectUnionNonPredictable], "3.1">());
