import typia from "typia";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TypeTagPattern = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "TypeTagPattern", 
  })(typia.json.schemas<[TypeTagPattern], "3.1">());