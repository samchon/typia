import typia from "typia";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectJsonTag = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectJsonTag", 
  })(typia.json.schemas<[ObjectJsonTag], "3.0">());