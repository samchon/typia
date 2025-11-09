import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_json_schemas_v3_1_ObjectIntersection = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectIntersection",
  })(typia.json.schemas<[ObjectIntersection], "3.1">());
