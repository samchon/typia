import typia from "typia";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectInternal = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectInternal", 
  })(typia.json.schemas<[ObjectInternal], "3.1">());