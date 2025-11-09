import typia from "typia";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ArraySimple = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ArraySimple", 
  })(typia.json.schemas<[ArraySimple], "3.0">());