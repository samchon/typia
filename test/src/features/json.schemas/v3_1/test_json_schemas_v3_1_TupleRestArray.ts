import typia from "typia";
import { TupleRestArray } from "../../../structures/TupleRestArray";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TupleRestArray = 
  _test_json_schemas({
    version: "3.1",
    name: "TupleRestArray", 
  })(typia.json.schemas<[TupleRestArray], "3.1">());