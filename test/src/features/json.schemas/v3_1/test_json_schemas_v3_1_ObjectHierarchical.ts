import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";

export const test_json_schemas_v3_1_ObjectHierarchical = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectHierarchical",
  })(typia.json.schemas<[ObjectHierarchical], "3.1">());
