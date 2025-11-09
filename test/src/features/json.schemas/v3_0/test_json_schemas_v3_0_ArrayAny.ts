import typia from "typia";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ArrayAny = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ArrayAny", 
  })(typia.json.schemas<[ArrayAny], "3.0">());