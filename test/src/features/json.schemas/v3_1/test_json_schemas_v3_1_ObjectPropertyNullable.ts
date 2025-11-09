import typia from "typia";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectPropertyNullable = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectPropertyNullable", 
  })(typia.json.schemas<[ObjectPropertyNullable], "3.1">());