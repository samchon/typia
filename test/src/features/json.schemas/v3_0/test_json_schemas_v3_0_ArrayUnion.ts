import typia from "typia";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ArrayUnion = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ArrayUnion", 
  })(typia.json.schemas<[ArrayUnion], "3.0">());