import typia from "typia";
import { ObjectHierarchical } from "../../../structures/ObjectHierarchical";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectHierarchical = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectHierarchical", 
  })(typia.json.schemas<[ObjectHierarchical], "3.0">());