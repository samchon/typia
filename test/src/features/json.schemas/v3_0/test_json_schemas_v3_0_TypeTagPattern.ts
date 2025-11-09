import typia from "typia";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_TypeTagPattern = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "TypeTagPattern", 
  })(typia.json.schemas<[TypeTagPattern], "3.0">());