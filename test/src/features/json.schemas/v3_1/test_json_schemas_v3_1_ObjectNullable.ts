import typia from "typia";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectNullable = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectNullable", 
  })(typia.json.schemas<[ObjectNullable], "3.1">());