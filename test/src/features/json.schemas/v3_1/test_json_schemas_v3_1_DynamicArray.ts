import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_DynamicArray = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "DynamicArray", 
  })(typia.json.schemas<[DynamicArray], "3.1">());