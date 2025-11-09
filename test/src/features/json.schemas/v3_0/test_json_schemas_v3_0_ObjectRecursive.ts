import typia from "typia";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectRecursive = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectRecursive", 
  })(typia.json.schemas<[ObjectRecursive], "3.0">());