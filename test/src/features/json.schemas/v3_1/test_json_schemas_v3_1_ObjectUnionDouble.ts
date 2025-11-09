import typia from "typia";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectUnionDouble = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectUnionDouble", 
  })(typia.json.schemas<[ObjectUnionDouble], "3.1">());