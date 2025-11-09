import typia from "typia";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectSimple = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectSimple", 
  })(typia.json.schemas<[ObjectSimple], "3.1">());